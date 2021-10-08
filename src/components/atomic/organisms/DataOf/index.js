import React, { useState } from 'react'
import Head from 'components/atomic/atoms/Heading'
import { header } from 'components/templates/Container.module.css'
import Modal from '../Modal'
import Table from '../Table'
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'

const DataOf = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div style={{marginTop: '30px'}}>
      <div className={header}>
        <Head>Datos de </Head>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Productos</ButtonIcon>
      </div>
      <Table />
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor='producto'
      />
    </div>
  )
}

export default DataOf