package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Providers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID _id;

    private String image;

    @NotBlank
    @Min(value = 2)
    private String name;

    @NotBlank
    @Min(value = 2)
    private String surname;

    private String fatherName;

    @NotBlank
    @Min(value = 2)
    private String motherName;

    @NotBlank
    @Temporal(TemporalType.DATE)
    private Date birthday;

    @NotBlank
    @CPF
    @Column(nullable = false, unique = true)
    private String cpf;

    private String rg;

    private String naturalness;

    @NotBlank
    private Timestamp registrationDate;

    private Timestamp modifiedDate;
}
