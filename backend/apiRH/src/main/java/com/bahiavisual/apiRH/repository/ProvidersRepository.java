package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProvidersRepository extends JpaRepository<Providers, Long> {
    Optional<Providers> findByCpf(String cpf);
    Optional <Providers> findByNameImageCloud(String nameImageCloud);

    List<Providers> findByContratacaoDemissaoIsContratado(String isContratado);
}
