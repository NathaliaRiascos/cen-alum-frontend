import React, { useState, useEffect, useContext } from 'react'
import { AutoComplete } from 'antd';
import PropTypes from 'prop-types'
const { Option } = AutoComplete;

import Input from 'components/atomic/atoms/Input'
import { container } from 'components/templates/Form.module.css'
import { EmployeeContext } from 'components/context/EmployeeContext'

const Formulario = ({boton, activarBoton, analisis, setAnalisis }) => {

  const { 
    //createEmployee,
    searchIdEmployee,
    coincidencias,
    findEmployee,
    //editEmployee,
  } = useContext(EmployeeContext)
  
  const [datosempleado, guardarEmpleado] = useState({
    nombre: '',
    identificacion: '',
    direccion: '',
    telefono: '',
    email: '',
    salario: 0
  })

  const {
    nombre,
    //identify,
    direccion,
    telefono,
    email,
    salario
  } = datosempleado;

  useEffect(() => {

    if (boton){
      setAnalisis({
        ...analisis,
        empleados: datosempleado
      })
      activarBoton()
    } 
    
  }, [boton])


  const handleChange = e => {

    guardarEmpleado({
      ...datosempleado,
      [e.target.name]: e.target.value
    })
  }

   
  const onChange = value => {                
    guardarEmpleado({
      ...datosempleado,
      identificacion: value
    })
  }
  return (
    <form className={container}>
      <Input
          label='Nombre'
          name='nombre'
          value={nombre}
          type='search'
          handleChange={handleChange}
      />
      <AutoComplete
        style={{
          width: 200,
        }}
        onSearch={value => searchIdEmployee(value)}
        onChange={onChange}
        onSelect={v => findEmployee(v)}
        placeholder='input here'
      >
        {coincidencias.map(item => (
          <Option key={item} value={item}>
            {item}
          </Option>
      ))}

      </AutoComplete>
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
          handleChange={handleChange}
      />
    </form>
  )
}
  
Formulario.propTypes = {
  analisis: PropTypes.object,
  setAnalisis: PropTypes.func,
  boton: PropTypes.bool,
  activarBoton: PropTypes.func
}

  export default Formulario