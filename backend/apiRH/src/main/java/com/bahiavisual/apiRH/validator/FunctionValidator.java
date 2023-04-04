package com.bahiavisual.apiRH.validator;

import com.bahiavisual.apiRH.entity.Functions;
import org.springframework.beans.factory.annotation.Autowired;

public class FunctionValidator {

    @Autowired
    Functions functions;

    public Functions spaceRemove(Functions functions){
        String functionsName = functions.getFunction().trim();
        functions.setFunction(functionsName.toUpperCase());
        return functions;
    }
}
