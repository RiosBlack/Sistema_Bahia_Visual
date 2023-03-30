package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.dto.ProvidersDTO;
import com.bahiavisual.apiRH.service.ProvidersService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/providers")
public class ProvidersController {
    @Autowired
    ProvidersService providersService;

    @GetMapping()
    public List<ProvidersDTO> getAll(){
        return providersService.getAll();
    };

    @PostMapping()
    public ResponseEntity save(@RequestBody @Valid ProvidersDTO providersDTO) {
        return providersService.save(providersDTO);
    };

    @PutMapping()
    public ResponseEntity edit(@RequestBody @Valid ProvidersDTO providersDTO){
        return providersService.edit(providersDTO);
    };

    @DeleteMapping()
    public ResponseEntity del(@RequestParam("cpf") String cpf){
      return providersService.del(cpf);
    };


}
