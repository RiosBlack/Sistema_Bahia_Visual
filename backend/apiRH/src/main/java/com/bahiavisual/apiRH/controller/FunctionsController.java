package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.Functions;
import com.bahiavisual.apiRH.entity.dto.FunctionDTO;
import com.bahiavisual.apiRH.service.FunctionsService;
import com.bahiavisual.apiRH.validator.FunctionValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/functions")
public class FunctionsController {
    @Autowired
    FunctionsService service;

    FunctionValidator validator = new FunctionValidator();

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<FunctionDTO> getAll(){ return service.getAll(); }

    @PostMapping()
    public ResponseEntity addFunction(@RequestBody @Valid FunctionDTO functionDTO){
        Functions functions = mapper.convertValue(functionDTO, Functions.class);
        Functions functionsDB = validator.spaceRemove(functions);
        if (functionsDB != null){
            service.saveFunction(functionsDB);
            return new ResponseEntity(functionsDB, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao salvar uma função", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{function}")
    public ResponseEntity dellFunction(@PathVariable("function") String function){ return service.delFunction(function); }
}
