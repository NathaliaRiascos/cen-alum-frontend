import React, { useState, useEffect, useContext } from "react"
import Input from "components/atomic/atoms/Input"

import PropTypes from "prop-types"
import TextField from "@mui/material/TextField"

import Autocomplete from "@mui/material/Autocomplete"

import { container } from "components/templates/Form.module.css"
import { ClientContext } from "components/context/ClientContext"

const Formulario = ({ added, active, setAdd, closeModal}) => {
  const {
    createClient,
    setEditClient,
    clients,
    updatedClients,
    updateClient,
    findClient,
    editClient,
  } = useContext(ClientContext)

  const initialState = {
    nombre: "",
    identificacion: "",
    direccion: "",
    telefono: "",
    email: "",
  }

  const [datoscliente, guardarCliente] = useState(initialState)
  const [disable, setDisable] = useState(true)

  const { 
    nombre, 
    identificacion, 
    direccion, 
    telefono, 
    email } = datoscliente

  useEffect(() => {
    if (active) {
 
      setDisable(false)
      guardarCliente(initialState)
     if (editClient) {
      datoscliente.nombre = editClient.nombre
      guardarCliente(editClient)
      setDisable(false)
     }
    }

    if (added && identificacion) {
      if (!editClient) {
        createClient(datoscliente)
      } else {
        updateClient(datoscliente)
      }
      updatedClients()
      setAdd(false)
      setEditClient(null)
      closeModal(false)
    }
  }, [added, active, editClient])

  const handleChange = e => {
    guardarCliente({
      ...datoscliente,
      [e.target.name]: e.target.value,
    })
  }
  
  const onChange = value => {
    if (!active) findClient(value.id_cliente)
  }

  
  const onInputNameChange = (e, value) => {
    guardarCliente({
      ...datoscliente,
      nombre: value,
    })
  }
  

  const onInputIdChange = (e, value) => {
    guardarCliente({
      ...datoscliente,
      identificacion: value,
    })
  }


  return (
    <form className={container}>
      <Autocomplete
        id='custom-input-demo'
        options={clients}
        name='nombre'
        inputValue={nombre}
        onInputChange={(event, value) => onInputNameChange(event, value)}
        onChange={(event, newValue) => onChange(newValue)}
        freeSolo
        sx={{ width: 223 }}
        disableClearable
        getOptionLabel={option => option.nombre}
        renderInput={params => (
          <TextField
            {...params}
            label='Nombre'
          />
        )}
      />
      <Autocomplete
        id='custom-input-demo'
        options={clients}
        inputValue={identificacion}
        name='identificacion'
        freeSolo
        disableClearable
        sx={{ width: 223 }}
        getOptionLabel={option => option.identificacion}
        onChange={(event, newValue) => onChange(newValue)}
        onInputChange={(event, value) => onInputIdChange(event, value)}
        renderInput={params => (
          <TextField
            {...params}
            label='Identificación'
          />
        )}
      />

      <Input
        label='Télefono'
        name='telefono'
        value={telefono}
        disable={disable}
        type='text'
        handleChange={handleChange}
      />
      <Input
        label='Dirección'
        name='direccion'
        value={direccion}
        disable={disable}
        type='text'
        handleChange={handleChange}
      />
      <Input
        label='Correo'
        name='email'
        value={email}
        disable={disable}
        type='text'
        handleChange={handleChange}
      />
    </form>
  )
}

Formulario.propTypes = {
  active: PropTypes.bool,
  added: PropTypes.bool.isRequired,
  setAdd: PropTypes.func,
  closeModal: PropTypes.func 
}


export default Formulario
