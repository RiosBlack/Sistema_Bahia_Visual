package com.bahiavisual.apiRH.validator;

import org.springframework.beans.factory.annotation.Autowired;
import com.bahiavisual.apiRH.entity.FunctionsProviders;
public class FunctionValidator {

    @Autowired
    FunctionsProviders functions;

    public FunctionsProviders spaceRemove(FunctionsProviders functions){
        String functionsName = functions.getFunctionProviders().trim();
        functions.setFunctionProviders(functionsName.toUpperCase());
        return functions;
    }
}
