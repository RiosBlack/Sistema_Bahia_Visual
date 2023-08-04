package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.sql.Timestamp;

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

    private String functions;

    @NotEmpty
    private Timestamp date;

    @NotEmpty
    private Time entradaTurnoDia;

    @NotEmpty
    private Time intervaloTurnoDia;

    @NotEmpty
    private Time retornoTurnoDia;

    @NotEmpty
    private Time saidaTurnoDia;

    @NotEmpty
    private Time entradaTurnoNoite;

    @NotEmpty
    private Time intervaloTurnoNoite;

    @NotEmpty
    private Time retornoTurnoNoite;

    @NotEmpty
    private Time saidaTurnoNoite;

    private Timestamp modifiedDate;

    private Boolean isSigned;

    private String signedImg;

}
