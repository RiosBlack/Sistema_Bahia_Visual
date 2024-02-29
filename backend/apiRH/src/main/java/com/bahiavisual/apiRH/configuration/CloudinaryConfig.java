package com.bahiavisual.apiRH.configuration;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;

@Configuration
public class CloudinaryConfig {

    // @Value("${cloudinary.cloud-name}")
    // private String cloudName;

    // @Value("${cloudinary.api-key}")
    // private String apiKey;

    // @Value("${cloudinary.api-secret}")
    // private String apiSecret;

    // @Bean
    // public Cloudinary cloudinary() {
    // return new Cloudinary(
    // String.format("cloudinary://%s:%s@%s", apiKey, apiSecret, cloudName)
    // );
    // }

    private final String CLOUD_NAME = "dwlk5ixuu";
    private final String API_KEY = "879397353354912";
    private final String API_SECRET = "bR81P-Kn_OUImxlCMGfXpp0zR3Q";

    @Bean
    public Cloudinary cloudinary() {
        Map config = new HashMap();
        config.put("cloud_name", CLOUD_NAME);
        config.put("api_key", API_KEY);
        config.put("api_secret", API_SECRET);
        config.put("secure", true);

        return new Cloudinary(config);
    }
}