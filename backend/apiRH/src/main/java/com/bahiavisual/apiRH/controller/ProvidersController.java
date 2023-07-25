package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.Andress;
import com.bahiavisual.apiRH.entity.Providers;
import com.bahiavisual.apiRH.entity.dto.ProvidersDTO;
import com.bahiavisual.apiRH.service.ProvidersService;
import com.bahiavisual.apiRH.validator.AndressValidator;
import com.bahiavisual.apiRH.validator.ProvidersValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    ProvidersValidator validator = new ProvidersValidator();

    AndressValidator validatorAndress = new AndressValidator();

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<ProvidersDTO> getAllProviders(){ return providersService.getAll(); };

    @GetMapping("/{cpf}")
    public Providers getProvider(@PathVariable("cpf") String cpf) { return providersService.getProvider(cpf); }

    @PostMapping()
    public ResponseEntity addProviders(@RequestBody @Valid ProvidersDTO providersDTO) {
        Providers providers = mapper.convertValue(providersDTO, Providers.class);
        //validando campos e datas
        Providers provaidersSemSpaces = validator.spacesRemove(providers);
        Andress andress = provaidersSemSpaces.getAndress();
        Andress andressSemSpaces = validatorAndress.spacesRemove(andress);
        provaidersSemSpaces.setAndress(andressSemSpaces);
        Boolean respInput = validator.validInputs(provaidersSemSpaces);
        Boolean respDate = validator.validDate(provaidersSemSpaces.getBirthday());
        if (respInput == true && respDate == true){
            return providersService.saveProvider(provaidersSemSpaces);
        }
        return new ResponseEntity("Erro ao salvar o prestador", HttpStatus.BAD_REQUEST);
    };

    @PutMapping()
    public ResponseEntity editProvider(@RequestBody @Valid ProvidersDTO providersDTO){
        Providers providers = mapper.convertValue(providersDTO, Providers.class);
        Providers ProveidersSemSpaces = validator.spacesRemove(providers);
        Boolean respInput = validator.validInputs(ProveidersSemSpaces);
        Boolean respDate = validator.validDate(ProveidersSemSpaces.getBirthday());
        if (respInput == true && respDate == true){
            return providersService.editProvider(providers);
        }
        return new ResponseEntity("Erro ao editar prestador", HttpStatus.BAD_REQUEST);
    };

    @DeleteMapping("/{cpf}")
    public ResponseEntity delProvider(@PathVariable("cpf") String cpf){
      return providersService.delProvider(cpf);
    };


}
