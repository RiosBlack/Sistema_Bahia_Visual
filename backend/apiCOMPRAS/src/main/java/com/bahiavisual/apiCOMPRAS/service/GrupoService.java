package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.GrupoProduto;
import com.bahiavisual.apiCOMPRAS.repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GrupoService {
    @Autowired
    GrupoRepository grupoRepository;

    public List<GrupoProduto> buscarTodosItens() {
        List<GrupoProduto> grupoProdutoList = grupoRepository.findAll();
        return  grupoProdutoList;
    }

    public ResponseEntity saveGrupo(GrupoProduto grupoProduto) {
        if (grupoProduto.getNome().isEmpty()) {
            return new ResponseEntity( "O NOME TEM DE ESTAR PREENCHIDO.",HttpStatus.NOT_FOUND);
        }
        if (grupoRepository.findByNome(grupoProduto.getNome()).isPresent()){
            return new ResponseEntity("O GRUPO JÁ ESTÁ CADASTRADO NO BANCO DE DADOS", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(grupoRepository.save(grupoProduto));
    }

    public ResponseEntity deletarGrupo(GrupoProduto grupoProduto){
        if (grupoProduto.getNome().isEmpty()) {
            return new ResponseEntity( "O NOME TEM DE ESTAR PREENCHIDO.",HttpStatus.NOT_FOUND);
        }
        Optional<GrupoProduto> dbNome = grupoRepository.findByNome(grupoProduto.getNome());
        if (dbNome.isEmpty()){
            return new ResponseEntity("GRUPO NÃO CADASTRADO NO BANCO DE DADOS", HttpStatus.NOT_FOUND);
        }
        grupoRepository.deleteById(dbNome.get().getId());
        return new ResponseEntity("GRUPO " + dbNome.get().getNome() +  " DELETADO COM SUCESSO", HttpStatus.OK);
    }

    public ResponseEntity editarGrupo(GrupoProduto grupoProduto) {
        if (grupoProduto.getNome().isEmpty()) {
            return new ResponseEntity( "O NOME TEM DE ESTAR PREENCHIDO.",HttpStatus.NOT_FOUND);
        }
        Optional<GrupoProduto> dbNome = grupoRepository.findById(grupoProduto.getId());
        if (dbNome.isEmpty()){
            return new ResponseEntity("GRUPO NÃO CADASTRADO NO BANCO DE DADOS", HttpStatus.NOT_FOUND);
        }
        GrupoProduto dbGrupoProduto = dbNome.get();
        dbGrupoProduto.setNome(grupoProduto.getNome());
        grupoRepository.save(dbGrupoProduto);
        return new ResponseEntity("O GRUPO " + dbNome.get().getNome() + " FOI ATUALIZADO COM SUCESSO.", HttpStatus.OK);
    }
}
