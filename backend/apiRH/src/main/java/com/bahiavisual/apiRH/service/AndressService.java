package com.bahiavisual.apiRH.service;

import com.bahiavisual.apiRH.entity.Andress;
import com.bahiavisual.apiRH.repository.AndressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AndressService {

    @Autowired
    AndressRepository repository;

    public List<Andress> getAll(){
        List<Andress> andressList = repository.findAll();
        return andressList;
    }

    public ResponseEntity saveAndress(Andress andress){
        if (andress == null){
            return new ResponseEntity("Endereço não pode ser nulo ou vaziu.", HttpStatus.BAD_REQUEST);
        }
        Andress andressSave = repository.saveAndFlush(andress);
        return new ResponseEntity("Endereço salvo com sucesso !", HttpStatus.OK);
    }

    public ResponseEntity delAndress(String zipCode){
        Optional<Andress> andressDB = repository.findByZipCode(zipCode);
        Andress andress1 = andressDB.get();
        if (andress1 == null || andress1.getZipCode() == null){
            return new ResponseEntity("Endereço não encontrado no banco de dados", HttpStatus.BAD_REQUEST);
        }
        repository.deleteById(andressDB.get().getId());
        return new ResponseEntity("Endereço com cep " + andressDB.get().getZipCode() + " deletado com sucesso!", HttpStatus.OK);
    }

    public ResponseEntity editAndress(Andress andress){
        Optional<Andress> andressDB = repository.findByZipCode(andress.getZipCode());
        Andress andress1 = andressDB.get();

        if (andressDB.isEmpty() || andress1 == null){
            return new ResponseEntity("O cep não está cadastrado no banco de dados", HttpStatus.BAD_REQUEST);
        }

        andress1.setZipCode(andress.getZipCode());
        andress1.setRoad(andress.getRoad());
        andress1.setNumber(andress.getNumber());
        andress1.setNeighborhood(andress.getNeighborhood());
        andress1.setComplement(andress.getComplement());
        andress1.setCity(andress.getCity());
        andress1.setState(andress.getState());

        repository.save(andress1);

        return new ResponseEntity(andress1,HttpStatus.OK);
    }

}
