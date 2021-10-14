function validateClient(values) {

    let errores = {};

    if (!values.nombre) {
        errores.nombre = "El Nombre es obligatorio"
    } else if (Number.isNaN(values.identificacion)){
        errores.nombre = 'El nombre no puede ser un numero'
    }

    if (!values.identificacion) {
        errores.identificacion = 'La identificación es obligatoria'
    } else if (!Number.isNaN(values.identificacion)) {
        errores.identificacion = 'Solo se permite números'
    }

    // validar el email
    if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errores.email = "Email no válido"
    }

    return errores;
}

export default validateClient