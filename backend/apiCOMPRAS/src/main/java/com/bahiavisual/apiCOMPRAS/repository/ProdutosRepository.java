package com.bahiavisual.apiCOMPRAS.repository;

import com.bahiavisual.apiCOMPRAS.entity.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, UUID> {
    Optional<Produtos> findByNome(String nome);
}
