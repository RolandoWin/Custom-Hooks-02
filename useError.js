import { useState } from 'react';

export const useError = ( errorInitial = {} ) => {
    
    const [error, setError] = useState( errorInitial );
    //const [hasError, setHasError] = useState( errorInitial.hasError );
    const { messageErrors } = error;

    const add = ( value ) => {               
        const arrayErrors = messageErrors.push(value);
        setError( { 
                    messageErrors: arrayErrors,                     
                } );
        console.log("Agrega un error");        
    }

    const reset = (  ) => {                  
        const arrayErrors = [ ];       
        setError( { 
                    messageErrors: arrayErrors,                     
                } );        
        console.log("Limpia los errores");        
    }

    return {
        ...error,
        error,
        add,
        reset,
    }
}