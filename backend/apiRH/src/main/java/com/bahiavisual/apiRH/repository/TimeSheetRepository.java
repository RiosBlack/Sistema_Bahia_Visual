package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface TimeSheetRepository extends JpaRepository<TimeSheet, Long> {
    Optional<TimeSheet> findByDateAndCpf(LocalDate date, String cpf);
}
