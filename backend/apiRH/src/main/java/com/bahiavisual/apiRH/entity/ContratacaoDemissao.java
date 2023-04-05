package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
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
@Table(name = "CONTRATACAO_DEMISSÃO")
public class ContratacaoDemissao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Timestamp contratacaoDate;

    private Timestamp demissaoDate;

    private String motivoDemissao;

    private Boolean isContratado;
}
