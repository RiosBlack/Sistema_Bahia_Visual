package com.bahiavisual.apiCOMPRAS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    private String nome;

    @NotBlank
    private String unidadeMedida;

    private String codigoProduto;

    private String Imagem;

    private String Observacoes;

    @NotBlank
    @OneToOne
    private GrupoProduto grupoProduto;

    @NotBlank
    private Double valorUnit;

    @NotBlank
    private Integer quantidade;
}
