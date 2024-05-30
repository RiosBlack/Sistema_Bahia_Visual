package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.SubgrupoProduto;
import com.bahiavisual.apiCOMPRAS.repository.SubGrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubGrupoService {
    @Autowired
    SubGrupoRepository subGrupoRepository;

    public List<SubgrupoProduto> buscarTodosSubGrupos() {
        List<SubgrupoProduto> subgrupoProdutoList = subGrupoRepository.findAll();
        return subgrupoProdutoList;
    }


    public ResponseEntity saveSubGrupo(SubgrupoProduto subgrupoProduto) {
        if (subGrupoRepository.findByNome(subgrupoProduto.getNome()).isPresent()){
            return new ResponseEntity("O SUBGRUPO JÁ ESTÁ CADASTRADO", HttpStatus.BAD_REQUEST);
        }
        if (subgrupoProduto.getGrupoProduto().getNome().isEmpty()){
            return new ResponseEntity("TEM DE VINCULAR AO UM GRUPO ANTES DE SALVAR", HttpStatus.BAD_REQUEST);
        }
        if (subgrupoProduto.getNome().isEmpty()){
            return new ResponseEntity("O NOME TEM DE ESTAR PREENCHIDO", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(subGrupoRepository.save(subgrupoProduto));
    }

    public ResponseEntity deletarSubGrupo(SubgrupoProduto subgrupoProduto){
        if (subgrupoProduto.getNome().isEmpty()){
            return new ResponseEntity( "O NOME TEM DE ESTAR PREENCHIDO.",HttpStatus.NOT_FOUND);
        }
        Optional<SubgrupoProduto> dbNome = subGrupoRepository.findByNome(subgrupoProduto.getNome());
        if (dbNome.isEmpty()){
            return new ResponseEntity("SUBGRUPO NÃO CADASTRADO NO BANCO DE DADOS", HttpStatus.NOT_FOUND);
        }
        subGrupoRepository.deleteById(dbNome.get().getId());
        return new ResponseEntity("GRUPO " + dbNome.get().getNome() +  " DELETADO COM SUCESSO", HttpStatus.OK);
    }
}
