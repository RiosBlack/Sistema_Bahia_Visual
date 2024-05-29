package com.bahiavisual.apiCOMPRAS.repository;

import com.bahiavisual.apiCOMPRAS.entity.SubgrupoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SubGrupoRepository extends JpaRepository<SubgrupoProduto, UUID> {
}
