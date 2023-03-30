package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProvidersRepository extends JpaRepository<Providers, UUID> {

    Optional<Providers> findByCpf(String cpf);
}
