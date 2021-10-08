import React from "react"
import Input from "components/atomic/atoms/Input"
import TextArea from "components/atomic/atoms/TextArea"
import { container } from "components/templates/Form.module.css"

const Formulario = () => {

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <form className={container}>
      <Input
        label='Referencia'
        value=''
        type='search'
        handleChange={handleChange}
      />
      <Input label='Ancho' value='' type='number' handleChange={handleChange} />
      <Input label='Precio' value='' type='number' handleChange={handleChange} />
      <Input label='Alto' value='' type='text' handleChange={handleChange} />
      <Input
        label='Cantidad'
        value=''
        type='number'
        handleChange={handleChange}
      />
      <Input label='Área' value='' type='number' handleChange={handleChange} />
      <TextArea
        label='Descripción'
        value=''
        type='text'
        size={4}
        handleChange={handleChange}
      />
      <Input
        label='Total'
        value=''
        type='number'
        handleChange={handleChange}
      />
    </form>
  )
}

export default Formulario
