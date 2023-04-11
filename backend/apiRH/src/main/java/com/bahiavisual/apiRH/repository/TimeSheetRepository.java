package com.bahiavisual.apiRH.repository;

import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TimeSheetRepository extends JpaRepository<TimeSheet, Long> {
}
