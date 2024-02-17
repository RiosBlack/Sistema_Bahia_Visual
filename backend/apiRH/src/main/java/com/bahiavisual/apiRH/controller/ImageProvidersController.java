package com.bahiavisual.apiRH.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bahiavisual.apiRH.entity.ImageProviders;
import com.bahiavisual.apiRH.service.ImageProvidersService;

@RestController
@RequestMapping("/api/upload/providers")
public class ImageProvidersController {
  @Autowired
  private ImageProvidersService imageProvidersService;

  @PostMapping()
  public ResponseEntity uploadImage(@RequestParam("file") MultipartFile file){
    ImageProviders imageProviders = imageProvidersService.salveImage(file);
    return new ResponseEntity(imageProviders, HttpStatus.OK);
  }
}
