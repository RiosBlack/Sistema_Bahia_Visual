package com.bahiavisual.apiRH.repository;


import com.bahiavisual.apiRH.entity.FunctionsProviders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FunctionsProvidersRepository extends JpaRepository <FunctionsProviders, Long> {
    FunctionsProviders findByFunctionProviders(String functionProviders);

}
