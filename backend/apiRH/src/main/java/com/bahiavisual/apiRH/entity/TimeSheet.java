package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "FOLHA_DE_HORAS")
public class TimeSheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "PROVIDERS_ID")
    private Providers providers;

    private String cpf;

    private String functions;

    private LocalDate date;

    private Time entradaTurnoDia;

    private Time intervaloTurnoDia;

    private Time retornoTurnoDia;

    private Time saidaTurnoDia;

    private Time entradaTurnoNoite;

    private Time intervaloTurnoNoite;

    private Time retornoTurnoNoite;

    private Time saidaTurnoNoite;

    private Timestamp modifiedDate;

    private Boolean isSigned;

    private String signedImg;

    private LocalTime hoursService;

    private Double diaryDay;

}
