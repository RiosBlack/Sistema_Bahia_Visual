package com.bahiavisual.apiRH.validator;

import com.bahiavisual.apiRH.entity.FunctionsProviders;
import org.springframework.beans.factory.annotation.Autowired;

public class FunctionValidator {

    @Autowired
    FunctionsProviders functions;

    public FunctionsProviders spaceRemove(FunctionsProviders functions){
        String functionsName = functions.getFunction().trim();
        functions.setFunction(functionsName.toUpperCase());
        return functions;
    }
}
