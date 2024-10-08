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
public class Compras {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    @OneToOne
    private Produtos produtos;

    @NotBlank
    @OneToOne
    private Fornecedores fornecedores;

    @NotBlank
    private String dataNota;

    @NotBlank
    private Double valorTotal;

    @NotBlank
    private Integer numeroNota;

    private Long ChaveAcesso;

    @OneToOne
    @JoinColumn(name="id")
    private FormasPagamento formasPagamento;
}
