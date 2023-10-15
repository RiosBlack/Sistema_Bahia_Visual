package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;

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

    @NotNull
    private Timestamp contratacaoDate;

    private Timestamp demissaoDate;

    private String motivoDemissao;

    @NotNull
    private Boolean isContratado;

    @NotNull
    @JoinColumn(name = "PROVIDERS_ID", referencedColumnName = "id")
    @OneToOne
    private Providers providers;

    private String cpf;

    private String functionContratado;

    @NotNull
    private Double diary;

}
