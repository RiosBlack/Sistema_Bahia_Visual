package com.bahiavisual.apiRH.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.bahiavisual.apiRH.entity.ImageProviders;
import com.bahiavisual.apiRH.entity.dto.ProvidersDTO;
import com.bahiavisual.apiRH.service.ImageProvidersService;

@RestController
@RequestMapping("/api/upload/providers")
public class ImageProvidersController {
  @Autowired
  private ImageProvidersService imageProvidersService;

  @PostMapping()
  public ResponseEntity uploadImage(@RequestParam("file") MultipartFile file) {

    
    String uriFile = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path(file.getOriginalFilename())
        .toUriString();

    ImageProviders imageProviders = imageProvidersService.salveImage(file, uriFile);
    return new ResponseEntity(imageProviders, HttpStatus.OK);
  }

  @GetMapping()
  public Stream getAllProviders() {
    return imageProvidersService.getAll();
  };
}
