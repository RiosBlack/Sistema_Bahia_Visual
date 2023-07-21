package com.bahiavisual.apiRH.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class AndressDTO {

    private String zipCode;

    private String road;

    private int number;

    private String neighborhood;

    private String complement;

    private String city;

    private String state;
}
