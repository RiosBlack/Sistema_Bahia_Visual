package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.FunctionsProviders;
import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.repository.FunctionsProvidersRepository;
import com.bahiavisual.apiRH.repository.ProvidersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProvidersService {

    @Autowired
    ProvidersRepository providersRepository;

    @Autowired
    FunctionsProvidersRepository functionsProvidersRepository;


    public List<Providers> getAll() {
        List<Providers> listProviders = providersRepository.findAll();
        return listProviders;
    }

    public List<Providers> getProviderIsContratado() {
        List<Providers> listProviders = providersRepository.findByContratacaoDemissaoIsContratado("Contratado");
        return listProviders;
    }

    public ResponseEntity saveProvider(Providers providers) {
        providers.setRegistrationDate(Timestamp.from(Instant.now()));
        providers.setModifiedDate(null);
        FunctionsProviders byFunctionProviders = functionsProvidersRepository
                .findByFunctionProviders(providers.getFunctionsProviders().getFunctionProviders());
        if (byFunctionProviders == null) {
            return new ResponseEntity("Função não encontrada", HttpStatus.BAD_REQUEST);
        }
        providers.setFunctionsProviders(byFunctionProviders);
        ContratacaoDemissao contratacaoDemissao = new ContratacaoDemissao();
        List<ContratacaoDemissao> contratacaoDemissaoList = new ArrayList();
        contratacaoDemissao.setIsContratado("Cadastrado");
        contratacaoDemissao.setCpf(providers.getCpf());
        contratacaoDemissao.setProviders(providers);
        contratacaoDemissaoList.add(contratacaoDemissao);
        providers.setContratacaoDemissao(contratacaoDemissaoList);
        Providers providersSalvo = providersRepository.saveAndFlush(providers);
        return new ResponseEntity(providersSalvo, HttpStatus.OK);
    }

    public ResponseEntity delProvider(String cpf) {
        Optional<Providers> providersDB = providersRepository.findByCpf(cpf);
        Providers providers = providersDB.get();
        if (providers == null || providers.getCpf() == null) {
            return new ResponseEntity("O prestador não foi encontrado no banco de dados", HttpStatus.BAD_REQUEST);
        }
        providersRepository.deleteById(providersDB.get().getId());
        return new ResponseEntity("O prestador " + providersDB.get().getName() + " foi excluido com sucesso !",
                HttpStatus.OK);
    }

    public ResponseEntity editProvider(Providers providers) {
        Optional<Providers> providersDB = providersRepository.findByCpf(providers.getCpf());
        Providers provider = providersDB.get();
        if (providersDB.isEmpty() || provider == null) {
            return new ResponseEntity("Prestador não existe no banco de dados", HttpStatus.BAD_REQUEST);
        }
        provider.setUrlImage(providers.getUrlImage());
        provider.setNameImageCloud(providers.getNameImageCloud());
        provider.setName(providers.getName());
        provider.setSurname(providers.getSurname());
        provider.setFatherName(providers.getFatherName());
        provider.setMotherName(providers.getMotherName());
        provider.setBirthday(providers.getBirthday());
        provider.setCpf(providers.getCpf());
        provider.setRg(providers.getRg());
        provider.setNaturalness(providers.getNaturalness());
        provider.setAndress(providers.getAndress());
        String functionProviders = providers.getFunctionsProviders().getFunctionProviders();
        FunctionsProviders byFunctionProviders = functionsProvidersRepository
                .findByFunctionProviders(functionProviders);
        provider.setFunctionsProviders(byFunctionProviders);

        provider.setModifiedDate(Timestamp.from(Instant.now()));

        providersRepository.save(provider);
        return new ResponseEntity(provider, HttpStatus.OK);
    }

    public Providers getProvider(String cpf) {
        Optional<Providers> provider = providersRepository.findByCpf(cpf);
        Providers providers = provider.get();
        return providers;
    }

}
