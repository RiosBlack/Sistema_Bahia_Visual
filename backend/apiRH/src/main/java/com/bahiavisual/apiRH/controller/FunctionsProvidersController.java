package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.FunctionsProviders;
import com.bahiavisual.apiRH.entity.dto.FunctionProvidersDTO;
import com.bahiavisual.apiRH.service.FunctionsProvidersService;
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
public class FunctionsProvidersController {
    @Autowired
    FunctionsProvidersService service;

    FunctionValidator validator = new FunctionValidator();

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<FunctionProvidersDTO> getAll(){ return service.getAll(); }

    @PostMapping()
    public ResponseEntity addFunction(@RequestBody @Valid FunctionProvidersDTO functionDTO){
        FunctionsProviders functions = mapper.convertValue(functionDTO, FunctionsProviders.class);
        FunctionsProviders functionsDB = validator.spaceRemove(functions);
        if (functionsDB != null){
            service.saveFunction(functionsDB);
            return new ResponseEntity(functionsDB, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao salvar uma função", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{function}")
    public ResponseEntity dellFunction(@PathVariable("function") String functionProvideres){
        return service.delFunction(functionProvideres);
    }
}
