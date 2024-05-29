package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.Produtos;
import com.bahiavisual.apiCOMPRAS.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutosService {

    @Autowired
    ProdutosRepository produtosRepository;

    public List<Produtos> buscarTodosProdutos() {
        List<Produtos> produtosList = produtosRepository.findAll();
        return produtosList;
    }


    public ResponseEntity saveProduto(Produtos produtos) {
        return ResponseEntity.ok(produtosRepository.save(produtos));
    }
}
