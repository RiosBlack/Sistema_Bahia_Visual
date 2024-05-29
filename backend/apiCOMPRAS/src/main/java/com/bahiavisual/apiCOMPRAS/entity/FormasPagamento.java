package com.bahiavisual.apiCOMPRAS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FormasPagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    private Integer numeroDocumento;

    private String status;

    @OneToOne
    @NotBlank
    private Fornecedores fornecedores;

    @OneToOne
    @NotBlank
    private TipoPagamento tipoPagamento;

    @OneToOne
    private CentroDeCusto centroDeCusto;

    @OneToMany
    @NotBlank
    @JoinColumn(name = "id")
    private List<Parcelas> parcelas;
}
