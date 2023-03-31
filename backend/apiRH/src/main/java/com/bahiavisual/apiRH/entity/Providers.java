package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import java.sql.Date;
import java.sql.Timestamp;

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

    private Timestamp registrationDate;

    private Timestamp modifiedDate;
}
