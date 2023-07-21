package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.Andress;
import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.dto.AndressDTO;
import com.bahiavisual.apiRH.entity.dto.ContratacaoDemissaoDTO;
import com.bahiavisual.apiRH.service.AndressService;
import com.bahiavisual.apiRH.service.ContratacaoDemissaoService;
import com.bahiavisual.apiRH.validator.AndressValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addAndDismiss")
public class ContratacaoDemissaoController {

    @Autowired
    ContratacaoDemissaoService service;

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<ContratacaoDemissaoDTO> getAllAndress(){ return service.getAll(); }

    @PostMapping()
    public ResponseEntity addContratacao(@RequestBody @Valid ContratacaoDemissaoDTO contratacaoDemissaoDTO){
        ContratacaoDemissao contratacaoDemissao = mapper.convertValue(contratacaoDemissaoDTO, ContratacaoDemissao.class);
        if (contratacaoDemissao != null) {
            service.saveContratacaoDemissao(contratacaoDemissao);
            return new ResponseEntity(contratacaoDemissao, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao salvar endereço.", HttpStatus.BAD_REQUEST);
    };

    @PutMapping()
    public ResponseEntity editContratacao(@RequestBody @Valid ContratacaoDemissaoDTO contratacaoDemissaoDTO){
        ContratacaoDemissao contratacaoDemissao = mapper.convertValue(contratacaoDemissaoDTO, ContratacaoDemissao.class);
        if (contratacaoDemissao != null) {
            service.editContratacaoDemissao(contratacaoDemissao);
            return new ResponseEntity(contratacaoDemissao, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao editar endereço.", HttpStatus.BAD_REQUEST);
    }

}
