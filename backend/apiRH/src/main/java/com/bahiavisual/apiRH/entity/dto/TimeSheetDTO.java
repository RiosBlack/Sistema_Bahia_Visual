package com.bahiavisual.apiRH.entity.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties(ignoreUnknown = true)
public class TimeSheetDTO {

    private ProvidersDTO providersDTO;

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
}
