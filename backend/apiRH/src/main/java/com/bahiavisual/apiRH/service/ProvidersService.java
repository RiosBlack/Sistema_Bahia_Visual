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

    ObjectMapper mapper = new ObjectMapper();

    public List<ProvidersDTO> getAll(){
        List<Providers> listProviders = providersRepository.findAll();
        List<ProvidersDTO> listProvidersDTO = new ArrayList<>();

        for (Providers providers : listProviders) {
            ProvidersDTO providersDTO = mapper.convertValue(providers, ProvidersDTO.class);
            listProvidersDTO.add(providersDTO);
        }

        return listProvidersDTO;
    }

    public ResponseEntity save(ProvidersDTO providersDTO){
        try {
            Providers providers = mapper.convertValue(providersDTO, Providers.class);
            providers.setRegistrationDate(Timestamp.from(Instant.now()));
            providers.setModifiedDate(null);
            Providers providersSalvo = providersRepository.save(providers);
            return new ResponseEntity(providersSalvo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Erro ao cadastrar prestador", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity del(String cpf){
        Optional<Providers> providersDB= providersRepository.findByCpf(cpf);
        providersRepository.deleteById(providersDB.get().get_id());
        return new ResponseEntity("O prestador " + providersDB.get().getName() + " foi excluido com sucesso !", HttpStatus.OK);
    }

    public ResponseEntity edit(ProvidersDTO providersDTO){
        Optional<Providers> providersDB = providersRepository.findByCpf(providersDTO.getCpf());
        Providers provider = mapper.convertValue(providersDB, Providers.class);
        if (provider.getImage() != null || !provider.getImage().isEmpty()) {
            provider.setImage(providersDTO.getImage());
        }
        if (provider.getName() != null || !provider.getName().isEmpty()) {
            provider.setName(providersDTO.getName());
        }
        if (provider.getSurname() != null || !provider.getSurname().isEmpty()) {
            provider.setSurname(providersDTO.getSurname());
        }
        if (provider.getFatherName() != null || !provider.getFatherName().isEmpty()) {
            provider.setFatherName(providersDTO.getFatherName());
        }
        if (provider.getMotherName() != null || !provider.getMotherName().isEmpty()) {
            provider.setMotherName(providersDTO.getMotherName());
        }
        if (provider.getBirthday() != null) {
            provider.setBirthday(providersDTO.getBirthday());
        }
        if (provider.getCpf() != null || !provider.getCpf().isEmpty()) {
            provider.setCpf(providersDTO.getCpf());
        }
        if (provider.getRg() != null || !provider.getRg().isEmpty()) {
            provider.setRg(providersDTO.getRg());
        }
        if (provider.getNaturalness() != null || !provider.getNaturalness().isEmpty()) {
            provider.setNaturalness(providersDTO.getNaturalness());
        }
        provider.setModifiedDate(Timestamp.from(Instant.now()));

        providersRepository.save(provider);
        return new ResponseEntity(provider, HttpStatus.OK);
    }
}
