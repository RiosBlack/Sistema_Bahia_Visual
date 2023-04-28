package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ANDRESS")
public class Andress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, unique = true)
    private String zipCode;

    @NotBlank
    private String road;

    private int number;

    @NotBlank
    private String neighborhood;

    private String complement;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @NotBlank
    private Boolean isPrincipal;
}