package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.TimeSheet;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDTO;
import com.bahiavisual.apiRH.repository.TimeSheetRepository;
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
public class TimeSheetService {
    @Autowired
    TimeSheetRepository repository;

    public List<TimeSheetDTO> getAll(){
        List<TimeSheet> listTimeSheet = repository.findAll();
        List<TimeSheetDTO> listTimeSheetDTO = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for (TimeSheet timeSheet : listTimeSheet) {
            TimeSheetDTO timeSheetDTO = mapper.convertValue(timeSheet, TimeSheetDTO.class);
            listTimeSheetDTO.add(timeSheetDTO);
        }
        return listTimeSheetDTO;
    }

    public ResponseEntity saveProvider(TimeSheet timeSheet){
        TimeSheet timeSalvo = repository.saveAndFlush(timeSheet);
        return new ResponseEntity(timeSalvo, HttpStatus.OK);
    }
}
/*
    public ResponseEntity editProvider(TimeSheet timeSheet){
        Optional<Providers> timeDB = repository.findByCpf(timeSheet.getProviders().getCpf());
        TimeSheet timeSheet1 = timeDB.get();
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
    }/*
}
