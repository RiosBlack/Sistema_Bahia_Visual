package com.bahiavisual.apiRH.validator;

import com.bahiavisual.apiRH.entity.Andress;
import org.springframework.beans.factory.annotation.Autowired;

public class AndressValidator {

    @Autowired
    Andress andress;

    public Andress spacesRemove(Andress andress){
        String andressCep = andress.getZipCode().trim();
        andress.setZipCode(andressCep.toUpperCase());

        String andressRoad = andress.getRoad().trim();
        andress.setRoad(andressRoad.toUpperCase());

        String andressNeighborhood = andress.getNeighborhood().trim();
        andress.setNeighborhood(andressNeighborhood.toUpperCase());

        String andressComplement = andress.getComplement().trim();
        andress.setComplement(andressComplement.toUpperCase());

        String andressCity = andress.getCity().trim();
        andress.setCity(andressCity.toUpperCase());

        String andressState = andress.getState().trim();
        andress.setState(andressState.toUpperCase());

        return andress;
    }
}
