import React from 'react'
import Input from 'components/atomic/atoms/Input'
import { container } from 'components/templates/Form.module.css'

const Formulario = () => {

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <form className={container}>
      <Input
          label='Nombre'
          value=''
          type='search'
          handleChange={handleChange}
      />
      <Input
          label='Identificación'
          value=''
          type='search'
          handleChange={handleChange}
      />
      <Input 
          label='Télefono'
          value=''
          type='text'
          handleChange={handleChange}
      />
      <Input 
          label='Dirección'
          value=''
          type='text'
          handleChange={handleChange}
      />
      <Input 
          label='Correo'
          value=''
          type='text'
          handleChange={handleChange}
      />
    </form>
  )
}
  
  export default Formulario