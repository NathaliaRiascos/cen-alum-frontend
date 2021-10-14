import React, {useState, useEffect, useContext} from "react"
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types"

import Input from "components/atomic/atoms/Input"
import TextArea from "components/atomic/atoms/TextArea"
import { container } from "components/templates/Form.module.css"
import { ProductContext } from "components/context/ProductContext"

const Formulario = ({ added, active, setAdd, closeModal}) => {

  const {
    productsDo,
    editProduct,
    updateProductDo,
    setEditProduct,
    setProductDo,
  } = useContext( ProductContext )

  const initialState = {
    descripcion: '',
    precio_unidad: 0,
    ancho: 0,
    alto: 0,
    area: 0,
    preciototal: 0,
    cantidad: 0,
  }

  const [datosProducts, setProducts] = useState(initialState)

  const {
    descripcion, 
    precio_unidad,
    ancho, 
    alto, 
    area, 
    preciototal,
    cantidad
  } = datosProducts


  useEffect(() => {
    if (active) {

      if (editProduct) setProducts(editProduct)
 
      if (added) {
        
        if (editProduct) {
          updateProductDo(datosProducts)
        } 
        
        if (!editProduct){
          datosProducts.key = uuidv4()
          setProductDo([...productsDo, datosProducts])
        }  
        setEditProduct(null)
        setProducts(initialState)
        setAdd()
        closeModal()
      }
    }
  }, [added, active])


  const handleChange = e => {
    setProducts({
      ...datosProducts,
      [e.target.name]: e.target.value
    })
  }

  const calcularTotal = e => {
    const valor = precio_unidad *  e.target.value
    setProducts({
      ...datosProducts,
      [e.target.name]: e.target.value,
      preciototal: valor
    })
  }

  return (
    <form className={container}>

      <Input 
        label='Ancho'
        name='ancho'
        value={ancho} 
        type='number' 
        handleChange={handleChange} 
      />
      <Input 
        label='Precio'
        name='precio_unidad'
        value={precio_unidad}
        type='number' 
        handleChange={handleChange} 
      />

      <Input 
        label='Alto'
        name='alto'
        value={alto}
        type='number' 
        handleChange={handleChange} 
      />
      <Input
        label='Cantidad'
        name='cantidad'
        value={cantidad}
        type='number'
        handleChange={calcularTotal}
      />
      <Input 
        label='Área'
        name='area' 
        value={area}
        type='number' 
        handleChange={handleChange} 
      />
    
      <Input
        label='Total'
        name='preciototal'
        value={preciototal}
        type='number'
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

Formulario.propTypes = {
  active: PropTypes.bool,
  added: PropTypes.bool.isRequired,
  setAdd: PropTypes.func,
  closeModal: PropTypes.func 
}
export default Formulario
