package com.bahiavisual.apiRH.entity.dto;

import com.bahiavisual.apiRH.entity.ContratacaoDemissao;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ContratacaoDemissaoDTO {
    private Long id;

    private LocalDate contratacaoDate;

    private LocalDate demissaoDate;

    private String motivoDemissao;

    private String isContratado;

    private String cpf;

    private Double diary;

    private String functionContratado;

    public ContratacaoDemissao toMapper() {
        ContratacaoDemissao contratacaoDemissao = new  ContratacaoDemissao();
        contratacaoDemissao.setId(this.id);
        contratacaoDemissao.setContratacaoDate(this.contratacaoDate);
        contratacaoDemissao.setDemissaoDate(this.demissaoDate);
        contratacaoDemissao.setMotivoDemissao(this.motivoDemissao);
        contratacaoDemissao.setIsContratado(this.isContratado);
        contratacaoDemissao.setCpf(this.cpf);
        contratacaoDemissao.setDiary(this.diary);
        contratacaoDemissao.setFunctionContratado(this.functionContratado);
        return contratacaoDemissao;
    }
}
