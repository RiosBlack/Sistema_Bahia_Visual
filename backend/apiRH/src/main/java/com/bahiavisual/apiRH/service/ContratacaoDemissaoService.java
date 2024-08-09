package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.repository.ContratacaoDemissaoRepository;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ContratacaoDemissaoService {
    @Autowired
    ContratacaoDemissaoRepository repository;

    @Autowired
    ProvidersRepository providersRepository;

    public ResponseEntity<ContratacaoDemissao> getAll() {
        List<ContratacaoDemissao> contratacaoDemissaoList = repository.findAll();

        if (contratacaoDemissaoList.isEmpty()) {
            return new ResponseEntity("Erro ao procurar contratação", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(contratacaoDemissaoList, HttpStatus.OK);
    }

    public ResponseEntity<ContratacaoDemissao> getCpfAll(String cpf) {
        List<ContratacaoDemissao> contratacaoDemissaoList = repository.findByCpf(cpf);
        if (contratacaoDemissaoList.isEmpty()) {
            return new ResponseEntity("Cpf não encontrado.", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(contratacaoDemissaoList, HttpStatus.OK);
    }

    public ResponseEntity saveContratacaoDemissao(ContratacaoDemissao contratacaoDemissao) {
        if (contratacaoDemissao == null) {
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }

        Optional<ContratacaoDemissao> providersContratado = repository
                .findByCpfAndIsContratadoAndDemissaoDateIsNull(contratacaoDemissao.getCpf(), "Contratado");

        if (providersContratado.isPresent()) {
            if (providersContratado.get().getDemissaoDate() == null) {
                return new ResponseEntity("O prestador está contratado.", HttpStatus.BAD_REQUEST);
            }
        }

        Optional<Providers> providerDB = providersRepository.findByCpf(contratacaoDemissao.getCpf());

        if (providerDB == null || providerDB.isEmpty()) {
            return new ResponseEntity("Prestador não encontrado no banco de dados", HttpStatus.BAD_REQUEST);
        }

        Optional<ContratacaoDemissao> providersCadastrado = repository
                .findByCpfAndIsContratado(contratacaoDemissao.getCpf(), "Cadastrado");

        if (providersCadastrado.isPresent()) {
            ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
            Instant instant = Instant.now();
            ZonedDateTime zonedDateTime = instant.atZone(zoneId);
            contratacaoDemissao.setId(providersCadastrado.get().getId());
            contratacaoDemissao.setCpf(providersCadastrado.get().getCpf());
            contratacaoDemissao.setContratacaoDate(LocalDate.from(zonedDateTime));
            contratacaoDemissao.setIsContratado("Contratado");
            contratacaoDemissao.setProviders(providerDB.get());
            ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissao);
            return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
        }

        ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
        Instant instant = Instant.now();
        ZonedDateTime zonedDateTime = instant.atZone(zoneId);
        contratacaoDemissao.setContratacaoDate(LocalDate.from(zonedDateTime));
        contratacaoDemissao.setIsContratado("Contratado");
        contratacaoDemissao.setProviders(providerDB.get());
        ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissao);
        return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
    }

    public ResponseEntity editContratacao(ContratacaoDemissao contratacaoDemissao) {
        if (contratacaoDemissao == null) {
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }
        Optional<ContratacaoDemissao> providersContratado = repository.findById(contratacaoDemissao.getId());
        if (providersContratado.isPresent()) {
            ContratacaoDemissao contratacaoDemissaoEdit = providersContratado.get();
            contratacaoDemissaoEdit.setContratacaoDate(contratacaoDemissao.getContratacaoDate());
            contratacaoDemissaoEdit.setDemissaoDate(contratacaoDemissao.getDemissaoDate());
            contratacaoDemissaoEdit.setMotivoDemissao(contratacaoDemissao.getMotivoDemissao());
            contratacaoDemissaoEdit.setProviders(providersContratado.get().getProviders());
            ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissaoEdit);
            return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
        } else {
            return new ResponseEntity("O prestador não está contratado", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity demissao(ContratacaoDemissao contratacaoDemissao) {
        if (contratacaoDemissao == null) {
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }

        Optional<ContratacaoDemissao> providersContratado = repository
                .findByCpfAndIsContratado(contratacaoDemissao.getCpf(), "Contratado");

        if (!providersContratado.isPresent()) {
            return new ResponseEntity<>("O prestador não se encontra contratado", HttpStatus.BAD_REQUEST);
        }

        if (providersContratado.isPresent()) {
            ContratacaoDemissao contratacaoDemissaoEdit = providersContratado.get();
            contratacaoDemissaoEdit.setIsContratado("Demitido");
            ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
            ZonedDateTime zonedDateTime = ZonedDateTime.now(zoneId);
            LocalDate dataNow = zonedDateTime.toLocalDate();
            contratacaoDemissaoEdit.setDemissaoDate(dataNow);
            contratacaoDemissaoEdit.setMotivoDemissao(contratacaoDemissao.getMotivoDemissao());
            if (contratacaoDemissaoEdit.getDemissaoDate().compareTo(contratacaoDemissaoEdit.getContratacaoDate()) < 0) {
                return new ResponseEntity("A data da demissão não pode ser inferior a data de demissão.",
                        HttpStatus.BAD_REQUEST);
            }
            ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissaoEdit);
            return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
        } else {
            return new ResponseEntity("O prestador não está contratado", HttpStatus.BAD_REQUEST);
        }
    }
}
