package com.bahiavisual.apiRH.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.bahiavisual.apiRH.entity.ImageProviders;
import com.bahiavisual.apiRH.repository.ImageProvidersRepository;

@Service
public class ImageProvidersService {

  @Autowired
  ImageProvidersRepository imageProvidersRepository;

  public ImageProviders salveImage(MultipartFile file) {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());

    try {
      ImageProviders imageProviders = new ImageProviders(fileName, file.getContentType(), file.getBytes());
      return imageProvidersRepository.save(imageProviders);
    } catch (IOException erro) {
      throw new RuntimeException("Não foi possível armazenar o arquivo " + fileName + ". Por favor tente novamente!",
          erro);
    }
  }

  public ImageProviders getFile(Long id) {
    return imageProvidersRepository.findById(id).get();
  }

  public Stream<ImageProviders> getAllFiles() {
    return imageProvidersRepository.findAll().stream();
  }
}
