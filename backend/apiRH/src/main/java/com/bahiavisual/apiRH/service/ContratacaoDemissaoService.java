package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.dto.ContratacaoDemissaoDTO;
import com.bahiavisual.apiRH.repository.ContratacaoDemissaoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContratacaoDemissaoService {
    @Autowired
    ContratacaoDemissaoRepository repository;

    public List<ContratacaoDemissaoDTO> getAll(){
        List<ContratacaoDemissao> contratacaoDemissaoList = repository.findAll();
        List<ContratacaoDemissaoDTO> contratacaoDemissaoDTOList = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for(ContratacaoDemissao contratacaoDemissao : contratacaoDemissaoList){
            ContratacaoDemissaoDTO contratacaoDemissaoDTO = mapper.convertValue(contratacaoDemissao, ContratacaoDemissaoDTO.class);
            contratacaoDemissaoDTOList.add(contratacaoDemissaoDTO);
        }
        return contratacaoDemissaoDTOList;
    }

    public ResponseEntity saveContratacaoDemissao(ContratacaoDemissao contratacaoDemissao){
        if (contratacaoDemissao == null){
            return new ResponseEntity("O objeto é nulo ou vaziu", HttpStatus.BAD_REQUEST);
        }
        ContratacaoDemissao contratacaoDemissaoSave = repository.saveAndFlush(contratacaoDemissao);
        return new ResponseEntity(contratacaoDemissaoSave, HttpStatus.OK);
    }

    public ResponseEntity editContratacaoDemissao(ContratacaoDemissao contratacaoDemissao){
        //preciso pesquisar pelo id do prestador
        return new ResponseEntity<>("fazendo", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity delContratacaoDemissao(){
        return new ResponseEntity("terminando", HttpStatus.BAD_REQUEST);
    }
}
