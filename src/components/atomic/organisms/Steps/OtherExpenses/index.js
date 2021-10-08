import React, { useState } from 'react'
//import LayoutSteps from "components/templates/Steps.js"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import Table from '../../Table'
import TextArea from 'components/atomic/atoms/TextArea'
import Modal from '../../Modal'

const Expenses = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Gastos</ButtonIcon>
        <Head>Otros gastos</Head>
      </div>
      <Table />
      <div>
        <Head>Observaciones</Head>
        <TextArea />
      </div>
      <div>
        <Head>Total general</Head>
        34546
      </div>
      <Modal 
        active={active} 
        toggle={toggle}
      />
    </div>
  )
}

export default Expenses