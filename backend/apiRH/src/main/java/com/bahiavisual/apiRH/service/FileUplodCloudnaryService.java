package com.bahiavisual.apiRH.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.utils.ObjectUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileUplodCloudnaryService implements FileUploadCloudnaryInterface {

  @Autowired
  private Cloudinary cloudinary;

  @Override
  public Map uploadImageProviderFile(MultipartFile file, String nameImage) {

    try {
      Map dataUpload = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
      "folder", "BahiaVisual/Prestadores"
      ,"public_id", nameImage));
      return dataUpload;
    } catch (Exception e) {
      throw new RuntimeException("Erro ao enviar imagem!");
    }
  }

}
