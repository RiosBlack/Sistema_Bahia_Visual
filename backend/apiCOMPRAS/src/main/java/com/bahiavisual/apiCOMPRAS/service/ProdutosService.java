package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.Produtos;
import com.bahiavisual.apiCOMPRAS.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    public ResponseEntity editarProduto(Produtos produtos){
        if (produtos.getNome().isEmpty()){
            return new ResponseEntity("O NOME TEM DE ESTAR PREENCHIDO.", HttpStatus.NOT_FOUND);
        }
        if (produtos.getUnidadeMedida().isEmpty()){
            return new ResponseEntity("A UNIDADE DE MEDIDA TEM DE ESTAR PREENCHIDA", HttpStatus.BAD_REQUEST);
        }
        if (produtos.getGrupoProduto().getNome().isEmpty()){
            return new ResponseEntity("O PRODUTO TEM DE ESTAR VINCULADO A UM GRUPO.", HttpStatus.BAD_REQUEST);
        }
        Produtos dbProduto = produtosRepository.findById(produtos.getId()).get();
        dbProduto.setNome(produtos.getNome());
        dbProduto.setUnidadeMedida(produtos.getUnidadeMedida());
        dbProduto.setCodigoProduto(produtos.getCodigoProduto());
        dbProduto.setGrupoProduto(produtos.getGrupoProduto());
        dbProduto.setValorUnit(produtos.getValorUnit());
        dbProduto.setQuantidade(produtos.getQuantidade());
        dbProduto.setImagem(produtos.getImagem());
        dbProduto.setObservacoes(produtos.getObservacoes());
        return ResponseEntity.ok(produtosRepository.save(dbProduto));
    }

    public ResponseEntity deletarProduto(Produtos produtos){
        Optional<Produtos> dbProduto = produtosRepository.findByNome(produtos.getNome());
        if (!dbProduto.isPresent()){
            return new ResponseEntity("O PRODUTO PRECISA ESTÁ CADASTRADO NO BANCO DE DADOS PARA SER EXCLUIDO!", HttpStatus.NOT_FOUND);
        }
        produtosRepository.deleteById(dbProduto.get().getId());
        return new ResponseEntity("O PRODUTO FOI EXCLUIDO COM SUCESSO!", HttpStatus.OK);
    }
}
