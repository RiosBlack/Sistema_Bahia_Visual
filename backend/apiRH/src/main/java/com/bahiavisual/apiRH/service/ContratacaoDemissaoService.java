package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.dto.ContratacaoDemissaoDTO;
import com.bahiavisual.apiRH.repository.ContratacaoDemissaoRepository;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContratacaoDemissaoService {
    @Autowired
    ContratacaoDemissaoRepository repository;

    @Autowired
    ProvidersRepository providersRepository;

    public List<ContratacaoDemissaoDTO> getAll(){
        List<ContratacaoDemissao> contratacaoDemissaoList = repository.findAll();
        List<ContratacaoDemissaoDTO> contratacaoDemissaoDTOList = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for(ContratacaoDemissao contratacaoDemissao : contratacaoDemissaoList){
            ContratacaoDemissaoDTO contratacaoDemissaoDTO = mapper.convertValue(contratacaoDemissao, ContratacaoDemissaoDTO.class);
            contratacaoDemissaoDTOList.add(contratacaoDemissaoDTO);
        }
        return contratacaoDemissaoDTOList;
    }

    public ResponseEntity saveContratacaoDemissao(ContratacaoDemissao contratacaoDemissao){
        if (contratacaoDemissao == null){
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }


        Optional<ContratacaoDemissao> providersContratado = repository.findByCpfAndIsContratadoAndDemissaoDateIsNull(contratacaoDemissao.getCpf(), true);

        if (providersContratado.isPresent()){
            if (providersContratado.get().getDemissaoDate() == null){
                return new ResponseEntity("O prestador está contratado.", HttpStatus.BAD_REQUEST);
            }
        }

        Optional<Providers> providerDB = providersRepository.findByCpf(contratacaoDemissao.getCpf());

        if (providerDB == null || providerDB.isEmpty()){
            return new ResponseEntity("Prestador não encontrado no banco de dados", HttpStatus.BAD_REQUEST);
        }

        contratacaoDemissao.setProviders(providerDB.get());
        ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
        Instant instant = Instant.now();
        ZonedDateTime zonedDateTime = instant.atZone(zoneId);
        LocalDate dataNow = LocalDate.now();
        contratacaoDemissao.setContratacaoDate(dataNow);
        contratacaoDemissao.setIsContratado(true);
        ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissao);
        return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
    }

    public ResponseEntity editContratacao(ContratacaoDemissao contratacaoDemissao){
        if (contratacaoDemissao == null){
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }
        Optional<ContratacaoDemissao> providersContratado = repository.findById(contratacaoDemissao.getId());
        if (providersContratado.isPresent()){
            ContratacaoDemissao contratacaoDemissaoEdit = providersContratado.get();

            contratacaoDemissaoEdit.setContratacaoDate(contratacaoDemissao.getContratacaoDate());
            contratacaoDemissaoEdit.setDemissaoDate(contratacaoDemissao.getDemissaoDate());
            contratacaoDemissaoEdit.setMotivoDemissao(contratacaoDemissao.getMotivoDemissao());
            ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissaoEdit);
            return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
        } else {
            return new ResponseEntity("O prestador não está contratado", HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity demissao(ContratacaoDemissao contratacaoDemissao) {
        if (contratacaoDemissao == null){
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }

        Optional<ContratacaoDemissao> providersContratado = repository.findByCpfAndIsContratado(contratacaoDemissao.getCpf(), true);

        if (!providersContratado.isPresent()){
            return new ResponseEntity<>("O prestador não se encontra contratado", HttpStatus.BAD_REQUEST);
        }

        if (providersContratado.isPresent()){
            ContratacaoDemissao contratacaoDemissaoEdit = providersContratado.get();
            contratacaoDemissaoEdit.setIsContratado(false);
            ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
            ZonedDateTime zonedDateTime = ZonedDateTime.now(zoneId);
            LocalDate dataNow = zonedDateTime.toLocalDate();
            contratacaoDemissaoEdit.setDemissaoDate(dataNow);
            contratacaoDemissaoEdit.setMotivoDemissao(contratacaoDemissao.getMotivoDemissao());
            if (contratacaoDemissaoEdit.getDemissaoDate().compareTo(contratacaoDemissaoEdit.getContratacaoDate()) <= 0){
                return new ResponseEntity("A data da demissão não pode ser inferior a data de demissão.", HttpStatus.BAD_REQUEST);
            }
            ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissaoEdit);
            return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
        } else {
            return new ResponseEntity("O prestador não está contratado", HttpStatus.BAD_REQUEST);
        }
    }
}
