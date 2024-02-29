package com.bahiavisual.apiRH.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadCloudnaryInterface {
  public Map uploadImageProviderFile(MultipartFile file, String nameImage);
  public Map deleteImageProviderFile(String nameId);
}