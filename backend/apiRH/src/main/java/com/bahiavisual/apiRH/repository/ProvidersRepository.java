package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ProvidersRepository extends JpaRepository<Providers, Long> {
    Optional<Providers> findByCpf(String cpf);
}
