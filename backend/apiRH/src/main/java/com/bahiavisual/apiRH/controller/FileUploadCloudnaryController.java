package com.bahiavisual.apiRH.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bahiavisual.apiRH.service.FileUplodCloudnaryService;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/upload")
public class FileUploadCloudnaryController {

  @Autowired
  private FileUplodCloudnaryService fileUplodCloudnaryService;

  @PostMapping("/provider")
  public ResponseEntity<Map> uploadImageProvider(@RequestParam("file") MultipartFile file,
      @RequestParam("nameImage") String nameImage) {
    Map data = fileUplodCloudnaryService.uploadImageProviderFile(file, nameImage);
    return new ResponseEntity<>(data, HttpStatus.OK);
  }

  @PostMapping("/provider/delete")
  public ResponseEntity<Map> postMethodName(@RequestParam("nameId") String nameId) {
    Map dataDelete = fileUplodCloudnaryService.deleteImageProviderFile(nameId);
    return new ResponseEntity<>(dataDelete, HttpStatus.OK);
  }

}
