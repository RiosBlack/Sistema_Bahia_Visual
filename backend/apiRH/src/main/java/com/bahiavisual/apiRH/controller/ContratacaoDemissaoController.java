package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.service.ContratacaoDemissaoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/addAndDismiss")
public class ContratacaoDemissaoController {

    @Autowired
    ContratacaoDemissaoService service;

    ProvidersController providersController = new ProvidersController();

    @GetMapping()
    public ResponseEntity<ContratacaoDemissao> getAllAndress(){ return service.getAll(); }

    @GetMapping("/{cpf}")
    public ResponseEntity<ContratacaoDemissao> getCpfAll(@PathVariable("cpf") String cpf){return service.getCpfAll(cpf);}

    @PostMapping()
    public ResponseEntity addContratacao(@RequestBody @Valid ContratacaoDemissao contratacaoDemissao){
        return service.saveContratacaoDemissao(contratacaoDemissao);
    };

    @PutMapping()
    public ResponseEntity editContratacao(@RequestBody @Valid ContratacaoDemissao contratacaoDemissao){
        //ContratacaoDemissao contratacaoDemissao = mapper.convertValue(contratacaoDemissaoDTO, ContratacaoDemissao.class);
        return service.editContratacao(contratacaoDemissao);
    }

    @PutMapping("/dismiss")
    public ResponseEntity demicao(@RequestBody @Valid ContratacaoDemissao contratacaoDemissao){
        return service.demissao(contratacaoDemissao);
    }
}
