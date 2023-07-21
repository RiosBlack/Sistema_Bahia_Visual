package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProvidersRepository extends JpaRepository<Providers, Long> {
    Optional<Providers> findByCpf(String cpf);
}
