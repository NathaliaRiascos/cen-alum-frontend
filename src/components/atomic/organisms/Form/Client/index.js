import React from 'react'
import Input from 'components/atomic/atoms/Input'
import { container, containerChild } from 'components/templates/Form.module.css'

const Formulario = () => {

  return (
    <form className={container}>
      <Input 
          className={containerChild}
          label='Nombre'
          value=''
          type='search'
      />
      <Input
          className={containerChild}
          label='Identificación'
          value=''
          type='search'
      />
      <Input 
          className={containerChild}
          label='Télefono'
          value=''
          type='text'
      />
      <Input 
          className={containerChild}
          label='Dirección'
          value=''
          type='text'
      />
      <Input 
          className={containerChild}
          label='Correo'
          value=''
          type='text'
      />
    </form>
  )
}
  
  export default Formulario