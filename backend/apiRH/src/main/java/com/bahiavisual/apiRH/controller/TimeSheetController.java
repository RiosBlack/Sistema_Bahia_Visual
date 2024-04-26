package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.TimeSheet;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDTO;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDateBetweenDTO;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDateDTO;
import com.bahiavisual.apiRH.entity.dto.TimeSheetValueDateMonthDTO;
import com.bahiavisual.apiRH.service.TimeSheetService;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/timeSheet")
public class TimeSheetController {
    @Autowired
    TimeSheetService timeSheetService;

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<TimeSheet> getAllTimeSheet(){ return timeSheetService.getAll(); }

    @GetMapping("/{cpf}")
    public ResponseEntity getCpfAll(@PathVariable("cpf") String cpf){ return timeSheetService.getTimeSheetCPFall(cpf); }

    @PostMapping("/cpfDate")
    public ResponseEntity getCpfDate(@RequestBody TimeSheetDateDTO timeSheetDateDTO) { return timeSheetService.getTimeSheetCPFandDate(timeSheetDateDTO); }

    @PostMapping("/cpfDateBetween")
    public ResponseEntity getCpfDateBetween(@RequestBody TimeSheetDateBetweenDTO timeSheetDateBetweenDTO) { return timeSheetService.getTimeSheetCPFandDateBetween(timeSheetDateBetweenDTO); }

    @PostMapping("/dateMonthValue")
    public ResponseEntity getValueDateMonth(@RequestBody TimeSheetValueDateMonthDTO timeSheetValueDateMonthDTO) { return timeSheetService.getTimeSheetValueDate(timeSheetValueDateMonthDTO); }

    @PostMapping()
    public ResponseEntity addTimeSheet(@RequestBody @Valid TimeSheetDTO timeSheetDTO){
        mapper.registerModule(new JavaTimeModule());
        TimeSheet timeSheet = mapper.convertValue(timeSheetDTO, TimeSheet.class);
        if (timeSheet != null){
           return timeSheetService.saveTimeSheet(timeSheet);
        }
        return new ResponseEntity(timeSheetService.saveTimeSheet(timeSheet), HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity delTimeSheet(@RequestBody TimeSheetDateDTO timeSheetDateDTO){
        if (timeSheetDateDTO.getDate() == null){
            return new ResponseEntity("A data não pode ser nula", HttpStatus.BAD_REQUEST);
        }
        if (timeSheetDateDTO.getCpf() == null){
            return new ResponseEntity("O cpf não pode ser null", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(timeSheetService.delTimeSheet(timeSheetDateDTO), HttpStatus.OK);
    }
}
