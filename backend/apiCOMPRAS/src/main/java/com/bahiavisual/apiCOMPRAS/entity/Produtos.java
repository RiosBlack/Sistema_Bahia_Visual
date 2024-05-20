package com.bahiavisual.apiCOMPRAS.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @NotBlank
    private String nome;

    @NotBlank
    private String unidadeMedida;

    private String codigoProduto;

    private String Imagem;

    private String Observacoes;

    @NotBlank
    private GrupoProduto grupoProduto;

    @NotBlank
    private Double valorUnit;

    @NotBlank
    private Integer quantidade;
}
