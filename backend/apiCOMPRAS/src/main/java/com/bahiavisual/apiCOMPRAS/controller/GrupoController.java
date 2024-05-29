package com.bahiavisual.apiCOMPRAS.controller;

import com.bahiavisual.apiCOMPRAS.entity.GrupoProduto;
import com.bahiavisual.apiCOMPRAS.service.GrupoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Grupo")
public class GrupoController {
    @Autowired
    GrupoService grupoService;

    @GetMapping()
    public List<GrupoProduto> getAll(){
        return grupoService.buscarTodosItens();
    }

    @PostMapping()
    public ResponseEntity addItensGrupo(@RequestBody @Valid GrupoProduto grupoProduto){
        return grupoService.saveGrupo(grupoProduto);
    }
}
