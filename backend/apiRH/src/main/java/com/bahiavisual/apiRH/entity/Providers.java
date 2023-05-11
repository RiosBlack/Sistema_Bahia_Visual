package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
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

    private String image;

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

    @JoinColumn(name="ID_PROVIDERS)", referencedColumnName = "id")
    @OneToOne(cascade = CascadeType.ALL)
    private Andress andress;
}
