import React, { useState, useEffect, useContext } from 'react'
import Input from 'components/atomic/atoms/Input'
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;

import { container } from 'components/templates/Form.module.css'
import { ClientContext } from 'components/context/ClientContext'

const Formulario = ({ boton, activarBoton }) => {

  const { 
    createClient,
    searchIdClient,
    coincidencias,
    findClient,
    editClient,
  } = useContext(ClientContext)
  

  const [datoscliente, guardarCliente] = useState({
    nombre: '',
    identificacion: '',
    direccion: '',
    telefono: '',
    email: ''
  })

    const {
      nombre,
      //identify,
      direccion,
      telefono,
      email
    } = datoscliente;
  
    useEffect(() => {

      if (boton){
        if (!editClient) createClient(datoscliente)
        activarBoton()
      }
      if (editClient) guardarCliente(editClient)
      
    }, [boton, editClient])

  const handleChange = e => {

    guardarCliente({
      ...datoscliente,
      [e.target.name]: e.target.value
    })
  }

   
  const onChange = value => {                
    guardarCliente({
      ...datoscliente,
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
        onSearch={value => searchIdClient(value)}
        onChange={onChange}
        onSelect={v => findClient(v)}
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
    </form>
  )
}
  
  export default Formulario