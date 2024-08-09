package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.FunctionsProviders;
import com.bahiavisual.apiRH.repository.FunctionsProvidersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FunctionsProvidersService {
    @Autowired
    FunctionsProvidersRepository functionsProvidersRepository;

    public List<FunctionsProviders> getAll(){
        List<FunctionsProviders> functionList = functionsProvidersRepository.findAll();
        return functionList;
    }

    public ResponseEntity saveFunction(FunctionsProviders functionProviders){
        if (functionProviders == null){
            return  new ResponseEntity("O objeto não pode ser vaziu", HttpStatus.BAD_REQUEST);
        }
        FunctionsProviders functionSave = functionsProvidersRepository.saveAndFlush(functionProviders);
        return new ResponseEntity(functionSave, HttpStatus.OK);
    }

    public ResponseEntity delFunction(String functionName){
        FunctionsProviders functionsDb = functionsProvidersRepository.findByFunctionProviders(functionName);
        if (functionsDb == null || functionsDb.getFunctionProviders() == null){
            return  new ResponseEntity("Erro ao deletar função", HttpStatus.BAD_REQUEST);
        }
        functionsProvidersRepository.deleteById(functionsDb.getId());
        return new ResponseEntity("Função " + functionName + " deletada com sucesso!", HttpStatus.OK);
    }
}
