package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Andress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface AndressRepository extends JpaRepository<Andress, Long> {
    Optional<Andress> findByZipCode(String zipCode);
}
