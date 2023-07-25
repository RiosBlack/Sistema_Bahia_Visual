package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "CONTRATACAO_DEMISSAO")
public class ContratacaoDemissao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private Timestamp contratacaoDate;

    private Timestamp demissaoDate;

    private String motivoDemissao;

    @NotEmpty
    private Boolean isContratado;

    @NotBlank
    @JoinColumn(name = "PROVIDERS_ID")
    @OneToOne
    private Providers providers;

}
