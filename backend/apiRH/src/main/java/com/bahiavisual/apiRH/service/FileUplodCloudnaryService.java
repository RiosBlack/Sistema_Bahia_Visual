package com.bahiavisual.apiRH.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.repository.ProvidersRepository;
import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.utils.ObjectUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileUplodCloudnaryService implements FileUploadCloudnaryInterface {

  @Autowired
  private Cloudinary cloudinary;

  @Autowired
  private ProvidersRepository providersRepository;

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

  @Override
  public Map deleteImageProviderFile(String nameId){
    Optional <Providers> providersDB = providersRepository.findByNameImageCloud(nameId);

    if (providersDB.isEmpty()) {
      throw new RuntimeException("Erro ao encontrar imagem!");
    }

    providersDB.get().setNameImageCloud("");
    providersDB.get().setUrlImage("");
    Providers providers = providersDB.get();

    try {
      Map dataDelete = this.cloudinary.uploader().destroy(nameId, ObjectUtils.emptyMap());
      providersRepository.save(providers);
      return dataDelete;
    } catch (Exception e) {
      throw new RuntimeException("Erro ao deletar imagem!");
    }
  }

}
