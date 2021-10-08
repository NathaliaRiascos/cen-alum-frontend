import React from 'react'
import Input from 'components/atomic/atoms/Input'
import TextArea from 'components/atomic/atoms/TextArea'
import { container } from 'components/templates/Form.module.css'

const Formulario = () => {

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <form className={container}>
      <TextArea
          label='Descripción'
          value=''
          type='text'
          handleChange={handleChange}
      />
      <Input
          label='precio'
          value=''
          type='number'
          handleChange={handleChange}
      />
    </form>
  )
}
  
  export default Formulario