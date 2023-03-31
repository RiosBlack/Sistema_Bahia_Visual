package com.bahiavisual.apiRH.validator;


import com.bahiavisual.apiRH.entity.Providers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.format.ResolverStyle;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class ProvidersValidator {
    @Autowired
    Providers providers;


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

    public Boolean convertDate(String strDate){
        String dateFormat = "uuuu/MM/dd";

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter
                .ofPattern(dateFormat)
                .withResolverStyle(ResolverStyle.STRICT);
        try {
            LocalDate date = LocalDate.parse(strDate, dateTimeFormatter);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
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
        Boolean respConvert = convertDate(String.valueOf(date));
        if (respConvert == false){
            new ResponseEntity("Data invalida!", HttpStatus.BAD_REQUEST);
            return false;
        }
        int resCalcu = calculaIdade(date);
        if (resCalcu > 18){
            new ResponseEntity("Data não pode ser menor de idade.", HttpStatus.BAD_REQUEST);
            return false;
        }
        new ResponseEntity("Datas validadas com sucesso!",HttpStatus.OK);
        return true;
    }
}
