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
        contratacaoDemissao.setIsContratado(true);
        ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissao);
        return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
    }

    public ResponseEntity editContratacao(ContratacaoDemissao contratacaoDemissao){
        Optional<ContratacaoDemissao> dataOptional = repository.findById(contratacaoDemissao.getId());
        ContratacaoDemissao contratacaoDemissao2 = dataOptional.get();
        if (contratacaoDemissao2 == null || dataOptional.isEmpty()) {
            return new ResponseEntity("Contratação não existe", HttpStatus. BAD_REQUEST);
        }

        if (contratacaoDemissao2.getContratacaoDate() != null) {
            contratacaoDemissao2.setContratacaoDate(contratacaoDemissao.getContratacaoDate());
        }

        contratacaoDemissao2.setIsContratado(true);

        if (contratacaoDemissao2.getProviders() != null) {
            String cpfProvider = contratacaoDemissao.getProviders().getCpf();
            Optional<Providers> providerData = providersRepository.findByCpf(cpfProvider);
            if (providerData.get() == null || providerData.isEmpty()){
                return new ResponseEntity("Prestador não cadastrado", HttpStatus.BAD_REQUEST);
            }
            contratacaoDemissao2.setProviders(providerData.get());
        }

        repository.saveAndFlush(contratacaoDemissao2);
        return new ResponseEntity(contratacaoDemissao2, HttpStatus.OK);
    }


    public ResponseEntity demissao(ContratacaoDemissao contratacaoDemissao) {
        Optional<ContratacaoDemissao> contrataçãoDemissãoDb = repository.findById(contratacaoDemissao.getId());
        String cpfProvider = contratacaoDemissao.getProviders().getCpf();
        Optional<Providers> providerData = providersRepository.findByCpf(cpfProvider);

        if (providerData.isEmpty()){
            return new ResponseEntity("Prestador não encontrado", HttpStatus.BAD_REQUEST);
        }

        if (contrataçãoDemissãoDb.get() != null || !contrataçãoDemissãoDb.isEmpty()){
            contratacaoDemissao.setContratacaoDate(contrataçãoDemissãoDb.get().getContratacaoDate());
            contratacaoDemissao.setProviders(providerData.get());
            contratacaoDemissao.setIsContratado(false);
            repository.saveAndFlush(contratacaoDemissao);
        }
        return new ResponseEntity("Erro ao cadastrar demissão do prestador", HttpStatus.BAD_REQUEST);
    }
}
