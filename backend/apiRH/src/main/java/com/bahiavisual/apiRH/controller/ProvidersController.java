package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.dto.ProvidersDTO;
import com.bahiavisual.apiRH.service.ProvidersService;
import com.bahiavisual.apiRH.validator.ProvidersValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/providers")
public class ProvidersController {
    @Autowired
    ProvidersService providersService;

    ProvidersValidator validator = new ProvidersValidator();

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<ProvidersDTO> getAllProviders(){
        return providersService.getAll();
    };

    @PostMapping()
    public ResponseEntity addProviders(@RequestBody @Valid ProvidersDTO providersDTO) {
        Providers providers = mapper.convertValue(providersDTO, Providers.class);
        Boolean respInput = validator.validInputs(providers);
        Boolean respDate = validator.validDate(providers.getBirthday());
        if (respInput == true && respDate == true){
            return providersService.saveProvider(providers);
        }
        return new ResponseEntity("Erro ao salvar o prestador", HttpStatus.BAD_REQUEST);
    };

    @PutMapping()
    public ResponseEntity editProvider(@RequestBody @Valid ProvidersDTO providersDTO){
        Providers providers = mapper.convertValue(providersDTO, Providers.class);
        return providersService.editProvider(providers);
    };

    @DeleteMapping()
    public ResponseEntity delProvider(@RequestParam("cpf") String cpf){
      return providersService.delProvider(cpf);
    };


}
