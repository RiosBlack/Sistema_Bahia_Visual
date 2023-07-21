package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.FunctionsProviders;
import com.bahiavisual.apiRH.entity.dto.FunctionDTO;
import com.bahiavisual.apiRH.repository.FunctionsProvidersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class FunctionsProvidersService {
    @Autowired
    FunctionsProvidersRepository functionsProvidersRepository;

    public List<FunctionDTO> getAll(){
        List<FunctionsProviders> functionList = functionsProvidersRepository.findAll();
        List<FunctionDTO> functionDTOList = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for (FunctionsProviders functions : functionList){
            FunctionDTO functionDTO = mapper.convertValue(functions, FunctionDTO.class);
            functionDTOList.add(functionDTO);
        }
        return functionDTOList;
    }

    public ResponseEntity saveFunction(FunctionsProviders functionProviders){
        if (functionProviders == null){
            return  new ResponseEntity("O objeto não pode ser vaziu", HttpStatus.BAD_REQUEST);
        }
        FunctionsProviders functionSave = functionsProvidersRepository.saveAndFlush(functionProviders);
        return new ResponseEntity(functionSave, HttpStatus.OK);
    }

    public ResponseEntity delFunction(String functionName){
        Optional<FunctionsProviders> functionsDb = functionsProvidersRepository.findByFunctionProviders(functionName);
        FunctionsProviders functions = functionsDb.get();
        if (functions == null || functions.getFunctionProviders() == null){
            return  new ResponseEntity("Erro ao deletar função", HttpStatus.BAD_REQUEST);
        }
        functionsProvidersRepository.deleteById(functions.getId());
        return new ResponseEntity("Função " + functionName + " deletada com sucesso!", HttpStatus.OK);
    }
}
