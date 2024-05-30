package com.bahiavisual.apiCOMPRAS.controller;

import com.bahiavisual.apiCOMPRAS.entity.SubgrupoProduto;
import com.bahiavisual.apiCOMPRAS.service.SubGrupoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/SubGrupo")
public class SubGrupoController {
    @Autowired
    SubGrupoService subGrupoService;

    @GetMapping()
    public List<SubgrupoProduto> buscarTodos(){
        return subGrupoService.buscarTodosSubGrupos();
    }

    @PostMapping()
    public ResponseEntity adicionarSubGrupo(@RequestBody @Valid SubgrupoProduto subgrupoProduto){
        return subGrupoService.saveSubGrupo(subgrupoProduto);
    }

    @DeleteMapping()
    public ResponseEntity deletarSubGrupo(@RequestBody SubgrupoProduto subgrupoProduto){
        return subGrupoService.deletarSubGrupo(subgrupoProduto);
    }

    @PutMapping()
    public ResponseEntity editarSubGrupo(@RequestBody SubgrupoProduto subgrupoProduto){
        return subGrupoService.editarSubGrupo(subgrupoProduto);
    }
}
