package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContratacaoDemissaoRepository extends JpaRepository <ContratacaoDemissao, Long> {
}
