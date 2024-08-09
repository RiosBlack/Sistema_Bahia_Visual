package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "PROVIDERS")
public class Providers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String urlImage;

    private String nameImageCloud;

    @NotBlank
    private String name;

    @NotBlank
    private String surname;

    private String fatherName;

    @NotBlank
    private String motherName;

    private Date birthday;

    @NotBlank
    @CPF
    @Column(nullable = false, unique = true)
    private String cpf;

    private String rg;

    private String naturalness;

    @NotBlank
    private String numberPhone1;

    private String numberPhone2;

    private Timestamp registrationDate;

    private Timestamp modifiedDate;

    @JoinColumn(name = "ID_ANDRESS)", referencedColumnName = "id")
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Andress andress;

    @JoinColumn(name = "ID_FUNCTIONS)", referencedColumnName = "id")
    @OneToOne
    private FunctionsProviders functionsProviders;

    @OneToMany(mappedBy = "providers", cascade = CascadeType.ALL)
    private List<ContratacaoDemissao> contratacaoDemissao;

}
