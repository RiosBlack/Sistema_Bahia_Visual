package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.Produtos;
import com.bahiavisual.apiCOMPRAS.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        if (produtos.getNome().isEmpty()){
            return new ResponseEntity("O NOME TEM DE ESTAR PREENCHIDO.", HttpStatus.NOT_FOUND);
        }
        if (produtos.getUnidadeMedida().isEmpty()){
            return new ResponseEntity("A UNIDADE DE MEDIDA TEM DE ESTAR PREENCHIDA", HttpStatus.BAD_REQUEST);
        }
        if (produtos.getGrupoProduto().getNome().isEmpty()){
            return new ResponseEntity("O PRODUTO TEM DE ESTAR VINCULADO A UM GRUPO.", HttpStatus.BAD_REQUEST);
        }
        if (produtosRepository.findByNome(produtos.getNome()).isPresent()){
            return new ResponseEntity("O PRODUTO JÁ ESTÁ CADASTRADO NO BANCO DE DADOS", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(produtosRepository.save(produtos));
    }
}
