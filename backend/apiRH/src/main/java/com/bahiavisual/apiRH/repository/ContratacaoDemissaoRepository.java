package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Optional;
import java.util.List;


@Repository
public interface ContratacaoDemissaoRepository extends JpaRepository <ContratacaoDemissao, Long> {
      Optional<ContratacaoDemissao> findByCpfAndIsContratado(String cpf, String isContratado);

      Optional<ContratacaoDemissao> findByCpfAndIsContratadoAndDemissaoDateIsNull(String cpf, String isContratado);

      List<ContratacaoDemissao> findByCpf(String cpf);

}
