package com.bahiavisual.apiRH.validator;


import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class ProvidersValidator {
    @Autowired
    Providers providers;


    public Providers spacesRemove(Providers providers){
        String providersName = providers.getName().trim();
        providers.setName(providersName.toUpperCase());

        String providersSurname = providers.getSurname().trim();
        providers.setSurname(providersSurname.toUpperCase());

        String providersCpf =  providers.getCpf().trim();
        providers.setCpf(providersCpf.toUpperCase());

        String providersNaturalness = providers.getNaturalness().trim();
        providers.setNaturalness(providersNaturalness.toUpperCase());

        String providersRg = providers.getRg().trim();
        providers.setRg(providersRg.toUpperCase());

        String providersMother = providers.getMotherName().trim();
        providers.setMotherName(providersMother.toUpperCase());

        String providersFather = providers.getFatherName().trim();
        providers.setFatherName(providersFather.toUpperCase());
        
        return providers;
    };

    public Boolean validInputs(Providers providers){
        if (providers.getName().isEmpty() || providers.getName() == null){
            new ResponseEntity("O campo de nome não foi informado", HttpStatus.BAD_REQUEST);
            return false;
        }
        if (providers.getSurname().isEmpty() || providers.getSurname() == null){
            new ResponseEntity("O campo de sobrenome não foi informado", HttpStatus.BAD_REQUEST);
            return false;
        }
        if (providers.getMotherName().isEmpty() || providers.getMotherName() == null) {
            new ResponseEntity("O campo de nome da mãe não foi informado", HttpStatus.BAD_REQUEST);
            return false;
        }
        if (providers.getBirthday() == null){
            new ResponseEntity("O campo de nome de data de aniversário não foi informado", HttpStatus.BAD_REQUEST);
            return false;
        }
        if (providers.getCpf().isEmpty() || providers.getCpf() == null) {
            new ResponseEntity("O campo de nome da mãe não foi informado", HttpStatus.BAD_REQUEST);
            return false;
        }
        new ResponseEntity("Inputs validados com sucesso!", HttpStatus.OK);
        return true;
    }

    public static int calculaIdade(java.util.Date dataNasc){
        Calendar dateOfBirth = new GregorianCalendar();
        dateOfBirth.setTime(dataNasc);
        // Cria um objeto calendar com a data atual
        Calendar today = Calendar.getInstance();
        // Obtém a idade baseado no ano
        int age = today.get(Calendar.YEAR) - dateOfBirth.get(Calendar.YEAR);
        dateOfBirth.add(Calendar.YEAR, age);
        //se a data de hoje é antes da data de Nascimento, então diminui 1(um)
        if (today.before(dateOfBirth)) {
            age--;
        }
        return age;
    }

    public Boolean validDate(Date date){
        int resCalcu = calculaIdade(date);
        if (resCalcu > 18){
            new ResponseEntity("Datas validadas com sucesso!",HttpStatus.OK);
            return true;
        }
        new ResponseEntity("Data não pode ser menor de idade.", HttpStatus.BAD_REQUEST);
        return false;
    }
}
