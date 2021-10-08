import React, { useState } from 'react'
//import LayoutSteps from "components/templates/Steps.js"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import Table from '../../Table'
import Modal from '../../Modal'
import PropTypes from 'prop-types'

const Material = ({analisis, setAnalisis}) => {

  const [boton, setBoton] = useState(false)
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  const activarBoton = () => {
    setBoton(!boton)
  }
  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Material</ButtonIcon>
        <Head>materiales</Head>
      </div>
      <Table />
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor='material'
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    </div>
  )
}

Material.propTypes = {
  analisis: PropTypes.object,
  setAnalisis: PropTypes.func
}

export default Material 