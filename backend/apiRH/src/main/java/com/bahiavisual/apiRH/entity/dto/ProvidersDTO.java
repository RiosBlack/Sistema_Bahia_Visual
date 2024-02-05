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
public class ProvidersDTO {

    private String image;

    private String name;

    private String surname;

    private String fatherName;

    private String motherName;

    private Date birthday;

    private String cpf;

    private String rg;

    private String naturalness;

    private String numberPhone1;

    private String numberPhone2;

    private Andress andress;

    private FunctionsProviders functionsProviders;

    private List<ContratacaoDemissao> contratacaoDemissao;
}
