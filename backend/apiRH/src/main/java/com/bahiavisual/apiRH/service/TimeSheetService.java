package com.bahiavisual.apiRH.service;


import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.TimeSheet;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDTO;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDateDTO;
import com.bahiavisual.apiRH.repository.ContratacaoDemissaoRepository;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import com.bahiavisual.apiRH.repository.TimeSheetRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;


@Service
public class TimeSheetService {
    @Autowired
    TimeSheetRepository repository;

    @Autowired
    ProvidersRepository providersRepository;

    @Autowired
    ContratacaoDemissaoRepository contratacaoDemissaoRepository;

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
        Optional<ContratacaoDemissao> prestadorContratado = contratacaoDemissaoRepository.findByCpfAndIsContratado(timeSheet.getCpf(), true);
        if (!prestadorContratado.isPresent()){
            return new ResponseEntity<>("Erro ao lançar diária de trabalho pois o cpf não está contratado", HttpStatus.BAD_REQUEST);
        }
        ContratacaoDemissao contratacaoPrestador = prestadorContratado.get();

        timeSheet.setProviders(providers.get());

        ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
        Instant instant = Instant.now();
        ZonedDateTime zonedDateTime = instant.atZone(zoneId);
        LocalDate dataNow = LocalDate.now();

        timeSheet.setDate(dataNow);

        timeSheet.setFunctions(contratacaoPrestador.getFunctionContratado());

        timeSheet.setDiaryDay(contratacaoPrestador.getDiary());

        LocalTime horasTrabalhadas = calcHoursDay(timeSheet.getEntradaTurnoDia(),timeSheet.getIntervaloTurnoDia(),timeSheet.getRetornoTurnoDia(),timeSheet.getSaidaTurnoDia(),
                timeSheet.getEntradaTurnoNoite(),timeSheet.getIntervaloTurnoNoite(),timeSheet.getRetornoTurnoNoite(),timeSheet.getSaidaTurnoNoite());

        System.out.println(horasTrabalhadas);

        timeSheet.setHoursService(horasTrabalhadas);

        Optional<TimeSheet> diaria = repository.findByDateAndCpf(timeSheet.getDate(),timeSheet.getCpf());
        System.out.println(diaria);


        if (diaria.isPresent()){
            return new ResponseEntity<>("ERRO!, Diária já lançada", HttpStatus.BAD_REQUEST);
        }

        TimeSheet timeSalvo = repository.saveAndFlush(timeSheet);

        return new ResponseEntity(timeSalvo, HttpStatus.OK);
    }

    public ResponseEntity delTimeSheet(TimeSheetDateDTO timeSheetDateDTO){
        Optional<TimeSheet> timeSheetDB = repository.findByDateAndCpf(timeSheetDateDTO.getDate(), timeSheetDateDTO.getCpf());
        if (timeSheetDB == null || timeSheetDB.isEmpty()){
            return new ResponseEntity("Diária ou prestador não encontrado.", HttpStatus.BAD_REQUEST);
        }
        repository.deleteById(timeSheetDB.get().getId());
        return new ResponseEntity("Diaria do dia " + timeSheetDB.get().getDate() + " , do prestador " +
                                         timeSheetDB.get().getProviders().getName() + " foi excluida com sucesso.", HttpStatus.OK);
    }


    public LocalTime calcHoursDay(Time entradaTurnoDia, Time intervaloTurnoDia, Time retornoTurnoDia, Time saidaTurnoDia,
                                  Time entradaTurnoNoite, Time intervaloTurnoNoite, Time retornoTurnoNoite, Time saidaTurnoNoite) {
        // Converte os objetos Time em milissegundos
        long ms1 = entradaTurnoDia.getTime();
        long ms2 = intervaloTurnoDia.getTime();
        long ms3 = retornoTurnoDia.getTime();
        long ms4 = saidaTurnoDia.getTime();
        long ms5 = entradaTurnoNoite.getTime();
        long ms6 = intervaloTurnoNoite.getTime();
        long ms7 = retornoTurnoNoite.getTime();
        long ms8 = saidaTurnoNoite.getTime();

        // Calcula as durações em milissegundos
        long turnoManhaMs = (ms1 - ms4) - (ms2 - ms3);
        long turnoNoiteMs = (ms5 - ms8) - (ms6 - ms7);
        long horasTrabalhadasMs = turnoManhaMs + turnoNoiteMs;

        // Converte a duração total em minutos
        long minutosTrabalhados = TimeUnit.MILLISECONDS.toMinutes(horasTrabalhadasMs);

        // Calcula horas e minutos
        long hours = (minutosTrabalhados / 60)*-1;
        long minutes = (minutosTrabalhados % 60)*-1;

        // Cria um novo objeto LocalTime com as horas e minutos calculados
        return LocalTime.of((int) hours, (int) minutes);
    }

}
