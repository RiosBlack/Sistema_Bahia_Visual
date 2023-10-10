package com.bahiavisual.apiRH.service;


import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.TimeSheet;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDTO;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import com.bahiavisual.apiRH.repository.TimeSheetRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class TimeSheetService {
    @Autowired
    TimeSheetRepository repository;

    @Autowired
    ProvidersRepository providersRepository;

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

    public ResponseEntity saveTimeSheet(TimeSheet timeSheet){
        //consultar o cpf para puxar o providers e setar
        Optional<Providers> providers = providersRepository.findByCpf(timeSheet.getCpf());
        if (providers == null || providers.isEmpty()){
            return new ResponseEntity("Prestador não encontrado no banco de dados", HttpStatus.BAD_REQUEST);
        }
        timeSheet.setProviders(providers.get());
        Timestamp dataNow = Timestamp.from(Instant.now());
        String dataFormatada = new SimpleDateFormat("dd/MM/yyyy").format(dataNow);
        timeSheet.setDate(dataFormatada);
        List<TimeSheet> dateDB = repository.findByDate(dataFormatada);
        //infelizmente não está parando no if
        for (TimeSheet dateDb : dateDB) {
            System.out.println(dateDb.getDate() + " " + dateDb.getProviders().getCpf());
            if (dateDb.getProviders().getCpf().equals(timeSheet.getProviders().getCpf()) &&
                    dateDb.getDate().equals(timeSheet.getDate())) {
                return new ResponseEntity("Diária do prestador já foi lançada", HttpStatus.BAD_REQUEST);
            }
        }
        timeSheet.setFunctions(timeSheet.getProviders().getFunctionsProviders().getFunctionProviders());
        TimeSheet timeSalvo = repository.saveAndFlush(timeSheet);
        return new ResponseEntity(timeSalvo, HttpStatus.OK);
    }

    public ResponseEntity editTimeService(TimeSheet timeSheet){
       Optional<TimeSheet> timeSheets = repository.findById(timeSheet.getId());
       TimeSheet timeSheetDB = timeSheets.get();

       if (timeSheets.isEmpty() || timeSheetDB == null){
           return new ResponseEntity("A ficha não pode ser vazia", HttpStatus.BAD_REQUEST);
       }
       //para manter a data do banco
       timeSheetDB.setDate(timeSheetDB.getDate());
       timeSheetDB.setEntradaTurnoDia(timeSheet.getEntradaTurnoDia());
       timeSheetDB.setIntervaloTurnoDia(timeSheet.getIntervaloTurnoDia());
       timeSheetDB.setRetornoTurnoDia(timeSheet.getRetornoTurnoDia());
       timeSheetDB.setSaidaTurnoDia(timeSheet.getSaidaTurnoDia());
       timeSheetDB.setEntradaTurnoNoite(timeSheet.getEntradaTurnoNoite());
       timeSheetDB.setIntervaloTurnoNoite(timeSheet.getIntervaloTurnoNoite());
       timeSheetDB.setRetornoTurnoNoite(timeSheet.getRetornoTurnoNoite());
       timeSheetDB.setSaidaTurnoNoite(timeSheet.getSaidaTurnoNoite());
       TimeSheet timeSheetSalvo = repository.saveAndFlush(timeSheet);
        return new ResponseEntity(timeSheetSalvo, HttpStatus.OK);
    }
}
