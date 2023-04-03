package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.dto.ProvidersDTO;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
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



    public List<ProvidersDTO> getAll(){
        List<Providers> listProviders = providersRepository.findAll();
        List<ProvidersDTO> listProvidersDTO = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for (Providers providers : listProviders) {
            ProvidersDTO providersDTO = mapper.convertValue(providers, ProvidersDTO.class);
            listProvidersDTO.add(providersDTO);
        }

        return listProvidersDTO;
    }

    public ResponseEntity saveProvider(Providers providers){
            providers.setRegistrationDate(Timestamp.from(Instant.now()));
            providers.setModifiedDate(null);
            Providers providersSalvo = providersRepository.saveAndFlush(providers);
            return new ResponseEntity(providersSalvo, HttpStatus.OK);
    }

    public ResponseEntity delProvider(String cpf){
        Optional<Providers> providersDB= providersRepository.findByCpf(cpf);
        if (providersDB.isEmpty()){
            return new ResponseEntity("O prestador não foi encontrado no banco de dados",HttpStatus.BAD_REQUEST);
        }
        System.out.println(providersDB);
        providersRepository.deleteById(providersDB.get().getId());
        return new ResponseEntity("O prestador " + providersDB.get().getName() + " foi excluido com sucesso !", HttpStatus.OK);
    }

    public ResponseEntity editProvider(Providers providers){
        Optional<Providers> providersDB = providersRepository.findByCpf(providers.getCpf());
        Providers provider = providersDB.get();
        if (providersDB.isEmpty() || provider == null){
            return new ResponseEntity("Prestador não existe no banco de dados", HttpStatus.BAD_REQUEST);
        }
        if (provider.getImage() != null || !provider.getImage().isEmpty()) {
            provider.setImage(providers.getImage());
        }
        if (provider.getName() != null || !provider.getName().isEmpty()) {
            provider.setName(providers.getName());
        }
        if (provider.getSurname() != null || !provider.getSurname().isEmpty()) {
            provider.setSurname(providers.getSurname());
        }
        if (provider.getFatherName() != null || !provider.getFatherName().isEmpty()) {
            provider.setFatherName(providers.getFatherName());
        }
        if (provider.getMotherName() != null || !provider.getMotherName().isEmpty()) {
            provider.setMotherName(providers.getMotherName());
        }
        if (provider.getBirthday() != null) {
            provider.setBirthday(providers.getBirthday());
        }
        if (provider.getCpf() != null || !provider.getCpf().isEmpty()) {
            provider.setCpf(providers.getCpf());
        }
        if (provider.getRg() != null || !provider.getRg().isEmpty()) {
            provider.setRg(providers.getRg());
        }
        if (provider.getNaturalness() != null || !provider.getNaturalness().isEmpty()) {
            provider.setNaturalness(providers.getNaturalness());
        }
        provider.setModifiedDate(Timestamp.from(Instant.now()));

        providersRepository.save(provider);
        return new ResponseEntity(provider, HttpStatus.OK);
    }
}
