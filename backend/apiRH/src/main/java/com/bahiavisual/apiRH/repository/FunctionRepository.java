package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Functions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FunctionRepository extends JpaRepository <Functions, Long> {
    Optional<Functions> findByFunction(String function);
}
