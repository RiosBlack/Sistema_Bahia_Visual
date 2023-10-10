package com.bahiavisual.apiRH.entity.dto;

import com.bahiavisual.apiRH.entity.Providers;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ContratacaoDemissaoDTO {
    private Long id;

    private Timestamp contratacaoDate;

    private Timestamp demissaoDate;

    private String motivoDemissao;

    private Boolean isContratado;

    private String cpf;

}
