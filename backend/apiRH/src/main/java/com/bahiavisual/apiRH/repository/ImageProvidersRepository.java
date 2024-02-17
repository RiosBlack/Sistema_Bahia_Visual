package com.bahiavisual.apiRH.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bahiavisual.apiRH.entity.ImageProviders;

@Repository
public interface ImageProvidersRepository extends JpaRepository<ImageProviders, Long>{
  
}
