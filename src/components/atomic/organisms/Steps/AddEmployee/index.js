import React, { useState } from 'react'
//import LayoutSteps from "components/templates/Steps.js"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import Table from '../../Table'
import Modal from '../../Modal'

const Employee = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Empleado</ButtonIcon>
        <Head>Empleados</Head>
      </div>
      <Table />
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor='empleado'
      />
    </div>
  )
}

export default Employee