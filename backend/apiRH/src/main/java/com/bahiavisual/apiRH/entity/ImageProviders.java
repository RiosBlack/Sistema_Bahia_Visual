package com.bahiavisual.apiRH.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "IMAGE_PROVIDERS")
public class ImageProviders {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(columnDefinition = "BLOB")
  @Lob
  private byte[] image;

  private String name;

  private String type;

  public ImageProviders(String name, String type, byte[] image) {
    this.name = name;
    this.type = type;
    this.image = image;
  }

}
