package com.bahiavisual.apiCOMPRAS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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

    private String nome;

    private String unidadeMedida;

    private String codigoProduto;

    private String Imagem;

    private String Observacoes;

    @OneToOne
    private GrupoProduto grupoProduto;

    private Double valorUnit;

    private Integer quantidade;
}
