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
public class Parcelas {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    private String dataVencimento;

    @NotBlank
    private Integer numeroParcela;

    private Long codigoBarras;

    @OneToOne
    private CartaoCredito cartaoCredito;

    @NotBlank
    private Double valorParcela;
}
