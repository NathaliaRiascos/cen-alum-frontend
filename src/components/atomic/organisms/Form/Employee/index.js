import React, { useState, useEffect, useContext } from "react"

import TextField from "@mui/material/TextField"
import PropTypes from "prop-types"

import Input from "components/atomic/atoms/Input"
import { container } from "components/templates/Form.module.css"
import { EmployeeContext } from "components/context/EmployeeContext"

import Autocomplete from "@mui/material/Autocomplete"

const Formulario = ({ added, active, setAdd, closeModal }) => {
  const {
    createEmployee,
    employees,
    findEmployee,
    updateEmployees,
    updateWorkforce,
    workforce,
    updateEmployee,
    setWorkforce,
    setEditEmployee,
    editEmployee,
  } = useContext(EmployeeContext)

  const initialState = {
    nombre: "",
    cedula: "",
    direccion: "",
    telefono: "",
    email: "",
  }


  const [datosempleado, guardarEmpleado] = useState(initialState)
  const [salario, setSalario] = useState(0)

  const {
    nombre,
    cedula,
    direccion,
    telefono,
    email,
  } = datosempleado

  useEffect(() => {
    if (active) {

      updateEmployees() 

      if (editEmployee) {
        guardarEmpleado(editEmployee)
        if (editEmployee.salario) setSalario(editEmployee.salario)
        //console.log(editEmployee.salario)
      } 

      if (added && cedula) {

        if ( editEmployee ) {
          datosempleado.salario = salario

          if (!editEmployee.key){
            datosempleado.key = datosempleado.id
            setWorkforce([...workforce, datosempleado])
            updateEmployee(datosempleado)
          } else {
            console.log(datosempleado)
            updateWorkforce(datosempleado)

        }
      }

        if (!editEmployee) createEmployee(datosempleado, salario)
       
        guardarEmpleado(initialState)
        setSalario(0)
        setEditEmployee(null)
        setAdd()
        closeModal(false)
      }
    }
  }, [added, active, editEmployee])

  const handleChange = e => {
    guardarEmpleado({
      ...datosempleado,
      [e.target.name]: e.target.value,
    })
  }
  
  const onChange = value => {
    findEmployee(value.id)
  }

  
  const onInputNameChange = (e, value) => {
    guardarEmpleado({
      ...datosempleado,
      nombre: value,
    })
  }
  

  const onInputIdChange = (e, value) => {
    guardarEmpleado({
      ...datosempleado,
      cedula: value,
    })
  }
  
  const onSalario = e => {
    setSalario(e.target.value)
  }
  return (
    <form className={container}>
      <Autocomplete
        id='custom-input-demo'
        options={employees}
        name='nombre'
        inputValue={nombre}
        onInputChange={(event, value) => onInputNameChange(event, value)}
        onChange={(event, newValue) => onChange(newValue)}
        freeSolo
        sx={{ width: 223 }}
        disableClearable
        getOptionLabel={option => option.nombre}
        renderInput={params => <TextField {...params} label='Nombre' />}
      />
      <Autocomplete
        id='custom-input-demo'
        options={employees}
        inputValue={cedula}
        name='cedula'
        freeSolo
        disableClearable
        sx={{ width: 223 }}
        getOptionLabel={option => option.cedula}
        onChange={(event, newValue) => onChange(newValue)}
        onInputChange={(event, value) => onInputIdChange(event, value)}
        renderInput={params => (
          <TextField {...params} label='Cédula' />
        )}
      />
      <Input
        label='Télefono'
        name='telefono'
        value={telefono}
        type='text'
        handleChange={handleChange}
      />
      <Input
        label='Dirección'
        name='direccion'
        value={direccion}
        type='text'
        handleChange={handleChange}
      />
      <Input
        label='Correo'
        name='email'
        value={email}
        type='text'
        handleChange={handleChange}
      />
      <Input
        label='Salario'
        name='salario'
        value={salario}
        type='number'
        handleChange={onSalario}
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
