package com.bahiavisual.apiCOMPRAS.repository;

import com.bahiavisual.apiCOMPRAS.entity.GrupoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface GrupoRepository extends JpaRepository<GrupoProduto, UUID> {
    Optional<GrupoProduto> findByNome(String nome);
}
