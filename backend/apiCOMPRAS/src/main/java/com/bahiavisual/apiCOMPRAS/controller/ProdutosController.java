package com.bahiavisual.apiCOMPRAS.controller;

import com.bahiavisual.apiCOMPRAS.entity.Produtos;
import com.bahiavisual.apiCOMPRAS.service.ProdutosService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutosController {

    @Autowired
    ProdutosService produtosService;

    @GetMapping()
    public List<Produtos> buscarTodos(){
        return produtosService.buscarTodosProdutos();
    }

    @PostMapping()
    public ResponseEntity adicionarProdutos(@RequestBody @Valid Produtos produtos){
        return produtosService.saveProduto(produtos);
    }

}
