package com.bahiavisual.apiCOMPRAS.service;

import com.bahiavisual.apiCOMPRAS.entity.GrupoProduto;
import com.bahiavisual.apiCOMPRAS.repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrupoService {
    @Autowired
    GrupoRepository grupoRepository;

    public List<GrupoProduto> buscarTodosItens() {
        List<GrupoProduto> grupoProdutoList = grupoRepository.findAll();
        return  grupoProdutoList;
    }

    public ResponseEntity saveGrupo(GrupoProduto grupoProduto) {
        return ResponseEntity.ok(grupoRepository.save(grupoProduto));
    }
}
