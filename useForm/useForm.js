import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm );    

    const onInputChange = ({ target }) => {
       //console.log( "target: ", target.type );
       //console.log( "target value: ", target.value );
       //console.log( "target checked: ", target.checked );
       switch (target.type) {
        case "text":{
            const { name, value } = target;
            setFormState({
                ...formState,
                [ name ] : value
            });
            }
            break;
        case "date":{
            const { name, value } = target;
            setFormState({
                ...formState,
                [ name ] : value
            });
            }
            break;
        case "checkbox":{
            const { name, checked } = target;
            setFormState({
                ...formState,
                [ name ] : checked
            });
            }
            break;
        case "radio":{
            const { name, value } = target;            
            setFormState({
                ...formState,
                [ name ] : value                
            });
            }
            break;
        case "select":{
                const { name, value } = target;            
                setFormState({
                    ...formState,
                    [ name ] : value                
                });
                }
                break;
        default:{
            const { name, value } = target;
            setFormState({
                    ...formState,
                    [ name ] : value
            });
        }
            break;
       } 
       
    }

    const onResetForm = () => {        
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
