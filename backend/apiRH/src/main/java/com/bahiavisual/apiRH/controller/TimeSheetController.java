package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.TimeSheet;
import com.bahiavisual.apiRH.entity.dto.TimeSheetDTO;
import com.bahiavisual.apiRH.service.TimeSheetService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/timeSheet")
public class TimeSheetController {
    @Autowired
    TimeSheetService timeSheetService;

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<TimeSheetDTO> getAllTimeSheet(){ return timeSheetService.getAll(); }

    @PostMapping()
    public ResponseEntity addTimeSheet(@RequestBody @Valid TimeSheetDTO timeSheetDTO){
        TimeSheet timeSheet = mapper.convertValue(timeSheetDTO, TimeSheet.class);
        if (timeSheet != null){
            timeSheetService.saveTimeSheet(timeSheet);
            return new ResponseEntity(timeSheet, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao salvar folha de ponto", HttpStatus.BAD_REQUEST);
    }
}
