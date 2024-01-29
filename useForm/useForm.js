import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)
   

    const onResetForm = () =>{
        
        setFormState( initialForm );

    }

    const OnInputChange = ({target}) =>{
        const {name, value } =  target;
        setFormState({
            ...formState,
            // Propiedad computadas
                [name]: value
        });
    
    }


  return {
    // Estamos destructurando  y enviando el formstate{username, passowrd, email}
    ...formState,
    formState,
    OnInputChange,
    onResetForm,
  }
}
