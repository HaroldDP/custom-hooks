import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    //ESTADO INICIAL
    //Nota: Podemos manejar los estados que queramos
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })
    
    const getFetch = async() =>{
        // Nota:  Se implementa por si llega a cambiar nuestra url
        setState({
            ...state,
            isLoading: true,
        });

        const resp =  await fetch(url);
        const data =  await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,

        });
    } 

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        //Nota: Cuando tenemos un objeto  asi lo retornamos.
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,

    };
    
 
}


