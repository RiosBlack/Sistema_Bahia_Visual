package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.Functions;
import com.bahiavisual.apiRH.entity.dto.FunctionDTO;
import com.bahiavisual.apiRH.repository.FunctionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class FunctionsService {
    @Autowired
    FunctionRepository functionRepository;

    public List<FunctionDTO> getAll(){
        List<Functions> functionList = functionRepository.findAll();
        List<FunctionDTO> functionDTOList = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for (Functions functions : functionList){
            FunctionDTO functionDTO = mapper.convertValue(functions, FunctionDTO.class);
            functionDTOList.add(functionDTO);
        }
        return functionDTOList;
    }

    public ResponseEntity saveFunction(Functions functions){
        if (functions == null){
            return  new ResponseEntity("O objeto não pode ser vaziu", HttpStatus.BAD_REQUEST);
        }
        Functions functionSave = functionRepository.saveAndFlush(functions);
        return new ResponseEntity(functionSave, HttpStatus.OK);
    }

    public ResponseEntity delFunction(String functionName){
        Optional<Functions> functionsDb = functionRepository.findByFunction(functionName);
        Functions functions = functionsDb.get();
        if (functions == null || functions.getFunction() == null){
            return  new ResponseEntity("Erro ao deletar função", HttpStatus.BAD_REQUEST);
        }
        functionRepository.deleteById(functions.getId());
        return new ResponseEntity("Função " + functionName + " deletada com sucesso!", HttpStatus.OK);
    }
}
