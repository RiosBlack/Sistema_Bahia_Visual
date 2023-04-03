package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Andress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AndressRepository extends JpaRepository<Andress, Long> {
    Optional<Andress> findByCep(String zipCode);
}
