package com.bahiavisual.apiRH.entity.dto;

import com.bahiavisual.apiRH.entity.Andress;
import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.bahiavisual.apiRH.entity.FunctionsProviders;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class TimeSheetTableValueDTO {

    private String urlImage;

    private String nameImageCloud;

    private String name;

    private String surname;

    private String cpf;

    private Double valueDailyTotal;
}