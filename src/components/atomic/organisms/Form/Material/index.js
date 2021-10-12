import React, { useState, useEffect, useContext } from "react"
import Input from "components/atomic/atoms/Input"
import PropTypes from "prop-types"
import { container } from "components/templates/Form.module.css"
import { MaterialContext } from "components/context/MaterialContext"
import TextArea from "components/atomic/atoms/TextArea"

import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

const Formulario = ({ added, active, setAdd, closeModal}) => {
  const {
    setMaterialsUsed,
    //createMaterial,
    //updateMaterials,
    materialsUsed,
    //editMaterialUsed,
    findMaterial,
    materials,
    setEditMaterial,
    editMaterial,
    updateMaterialUsed,
    //updateMaterial
  } = useContext(MaterialContext)

  const initialState = {
    referencia: "",
    descripcion: "",
    precio: 0,
  }

  const initialOtrosData = {
    longitud: 0,
    cantidad: 0,
    total: 0
  }

  const [datosMaterial, setMaterial] = useState(initialState)
  const [otrosData, setOtros] = useState(initialOtrosData)

  const { referencia, descripcion, precio } = datosMaterial
  const { longitud, cantidad, total} = otrosData

  useEffect(() => {
    if (active) {
      

        if ( editMaterial) {
          setMaterial( editMaterial)
          setOtros(editMaterial)
        }

        if (added && referencia) {
          
          if ( editMaterial) {
            datosMaterial.longitud = longitud
            datosMaterial.cantidad = cantidad
            datosMaterial.total = editMaterial.precio * cantidad
            updateMaterialUsed(datosMaterial)
          }
      
          if (!editMaterial.key) {
            datosMaterial.longitud = longitud
            datosMaterial.cantidad = cantidad
            datosMaterial.total = total
            datosMaterial.key = datosMaterial.id_material
            setMaterialsUsed([...materialsUsed, datosMaterial])
          }

          
          setMaterial(initialState)
          setOtros(initialOtrosData)
          setEditMaterial(null)
          setAdd()
          closeModal(false)
        }
    }
  }, [added, active, editMaterial])

  const handleChange = e => {
    setMaterial({
      ...datosMaterial,
      [e.target.name]: e.target.value,
    })
  }

  const onChange = value => {
    findMaterial(value.id_material)
  }

  const onInputRefChange = (e, value) => {
    setMaterial({
      ...datosMaterial,
      referencia: value,
    })
  }

  const handleChangeOtros = e => {
    const valor = precio * e.target.value
    setOtros({
      ...otrosData,
      [e.target.name]: e.target.value,
      total: valor,
    })
  }
  
  return (
    <form className={container}>
      <Autocomplete
        id='custom-input-demo'
        options={materials}
        name='referencia'
        inputValue={referencia}
        onInputChange={(event, value) => onInputRefChange(event, value)}
        onChange={(event, newValue) => onChange(newValue)}
        freeSolo
        sx={{ width: 223 }}
        disableClearable
        getOptionLabel={option => option.referencia}
        renderInput={params => <TextField {...params} label='Referencia' />}
      />

      <Input
        label='Precio'
        name='precio'
        value={precio}
        type='number'
        handleChange={handleChange}
      />

      <Input
        label='longitud'
        name='longitud'
        value={longitud}
        type='number'
        handleChange={handleChangeOtros}
      />

      <Input
        label='Cantidad'
        name='cantidad'
        value={cantidad}
        type='number'
        handleChange={handleChangeOtros}
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
  analisis: PropTypes.object,
  setAnalisis: PropTypes.func,
  boton: PropTypes.bool,
  activarBoton: PropTypes.func,
}

export default Formulario
