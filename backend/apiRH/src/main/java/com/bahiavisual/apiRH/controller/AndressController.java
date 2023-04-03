package com.bahiavisual.apiRH.controller;

import com.bahiavisual.apiRH.entity.Andress;
import com.bahiavisual.apiRH.entity.dto.AndressDTO;
import com.bahiavisual.apiRH.service.AndressService;
import com.bahiavisual.apiRH.validator.AndressValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/andress")
public class AndressController {

    @Autowired
    AndressService andressService;

    AndressValidator andressValidator = new AndressValidator();

    ObjectMapper mapper = new ObjectMapper();

    @GetMapping()
    public List<AndressDTO> getAllAndress(){ return andressService.getAll(); }

    @PostMapping()
    public ResponseEntity addAndress(@RequestBody @Valid AndressDTO andressDTO){
        Andress andress = mapper.convertValue(andressDTO, Andress.class);
        Andress andressSetDB = andressValidator.spacesRemove(andress);
        if (andressSetDB != null) {
            andressService.saveAndress(andressSetDB);
            return new ResponseEntity(andressSetDB, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao salvar endereço.", HttpStatus.BAD_REQUEST);
    };

    @PutMapping()
    public ResponseEntity editAndress(@RequestBody @Valid AndressDTO andressDTO){
        Andress andress = mapper.convertValue(andressDTO, Andress.class);
        Andress andressSetDB = andressValidator.spacesRemove(andress);
        if (andressSetDB != null) {
            andressService.editAndress(andressSetDB);
            return new ResponseEntity(andressSetDB, HttpStatus.OK);
        }
        return new ResponseEntity("Erro ao editar endereço.", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/zipCode")
    public ResponseEntity delAndress(@PathVariable("zipCode") String zipCode) { return andressService.delAndress(zipCode); }
}
