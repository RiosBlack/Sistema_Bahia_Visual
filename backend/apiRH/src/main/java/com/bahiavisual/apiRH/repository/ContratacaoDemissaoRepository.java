package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContratacaoDemissaoRepository extends JpaRepository <ContratacaoDemissao, Long> {
    Optional<ContratacaoDemissao> findByCpf(String cpf);
}
