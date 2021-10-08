import React, { useState, useEffect } from 'react'
import Input from "components/atomic/atoms/Input"
import { container } from "components/templates/Form.module.css"
//import { MaterialContext } from 'components/context/MaterialContext'
import TextArea from "components/atomic/atoms/TextArea"

const Formulario = ({ boton, activarBoton, analisis, setAnalisis }) => {

  const [ datosMaterial, setMaterial ] = useState({
    referencia: '',
    descripcion: '',
    precio: 0
  })

  const {referencia, descripcion, precio } = datosMaterial

  useEffect(() => {

    if (boton){
      setAnalisis({
        ...analisis,
        materiales: datosMaterial
      })

      activarBoton()
    }
   
  }, [boton])

  const handleChange = e => {
    setMaterial({
      ...datosMaterial,
      [e.target.name]: e.target.value
    })
  }


 
  return (
    <form className={container}>
      <Input
        label='Referencia'
        name='referencia'
        value={referencia}
        type='search'
        handleChange={handleChange}
      />
      
      <Input
        label='Precio'
        name='precio'
        value={precio}
        type='text'
        handleChange={handleChange}
      />
      <TextArea
        label='Descripción'
        name='descripcion'
        value={descripcion}
        type='text'
        size={4}
        handleChange={handleChange}
      />
    </form>
  )
}

export default Formulario
