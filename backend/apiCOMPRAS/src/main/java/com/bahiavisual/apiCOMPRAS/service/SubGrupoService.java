package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.SubgrupoProduto;
import com.bahiavisual.apiCOMPRAS.repository.SubGrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubGrupoService {
    @Autowired
    SubGrupoRepository subGrupoRepository;

    public List<SubgrupoProduto> buscarTodosSubGrupos() {
        List<SubgrupoProduto> subgrupoProdutoList = subGrupoRepository.findAll();
        return subgrupoProdutoList;
    }


    public ResponseEntity saveSubGrupo(SubgrupoProduto subgrupoProduto) {
        return ResponseEntity.ok(subGrupoRepository.save(subgrupoProduto));
    }
}
