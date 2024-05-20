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
public class FormasPagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @NotBlank
    private Integer numeroDocumento;

    private String status;

    @NotBlank
    private Fornecedores fornecedores;

    @NotBlank
    private TipoPagamento tipoPagamento;

    private CentroDeCusto centroDeCusto;

    @NotBlank
    private Parcelas parcelas;
}
