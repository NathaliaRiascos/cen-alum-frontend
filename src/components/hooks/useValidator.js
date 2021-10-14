import { useState } from 'react';

const useValidacion = (stateInicial, validar) => {

    const [values, setValues ] = useState(stateInicial);
    const [errores, guardarErrores ] = useState({});

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = () => {
        const erroresValidacion = validar(values);
        guardarErrores(erroresValidacion);
    }



    return {
        values, 
        errores, 
        handleSubmit,
        handleChange,
        setValues
    }
}
 
export default useValidacion;