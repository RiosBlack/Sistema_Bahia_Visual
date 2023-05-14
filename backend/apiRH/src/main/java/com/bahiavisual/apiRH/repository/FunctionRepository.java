package com.bahiavisual.apiRH.repository;


import com.bahiavisual.apiRH.entity.FunctionsProviders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FunctionRepository extends JpaRepository <FunctionsProviders, Long> {
    Optional<FunctionsProviders> findByFunction(String function);
}
