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

import com.bahiavisual.apiRH.entity.dto.ContratacaoDemissaoDTO;

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

    public ContratacaoDemissaoDTO toMapper() {
        ContratacaoDemissaoDTO contratacaoDemissaoDto = new  ContratacaoDemissaoDTO();
        contratacaoDemissaoDto.setContratacaoDate(this.contratacaoDate);
        contratacaoDemissaoDto.setDemissaoDate(this.demissaoDate);
        contratacaoDemissaoDto.setMotivoDemissao(this.motivoDemissao);
        contratacaoDemissaoDto.setIsContratado(this.isContratado);
        contratacaoDemissaoDto.setCpf(this.cpf);
        contratacaoDemissaoDto.setDiary(this.diary);
        contratacaoDemissaoDto.setFunctionContratado(this.functionContratado);
        return contratacaoDemissaoDto;
    }

}
