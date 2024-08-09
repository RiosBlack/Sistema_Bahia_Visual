package com.bahiavisual.apiRH.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    private LocalDate contratacaoDate;

    private LocalDate demissaoDate;

    private String motivoDemissao;

    private String isContratado;

    private String cpf;

    private Double diary;

    private String functionContratado;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "provider_id", referencedColumnName = "id")
    private Providers providers;

}
