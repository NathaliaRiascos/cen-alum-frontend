import React, { useState } from 'react'
import Head from 'components/atomic/atoms/Heading'
import Form from '../../Form/Client'
import Modal from '../../Modal/Client'
import Button from 'components/atomic/atoms/Button'
import { container } from 'components/templates/Step.module.css'

const DataClient = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={container}>
        <Head type='h2'>Datos de cliente</Head>
        <p>
          ¿El cliente ya se encuentra registrado? 
          <Button type='enlace' onClick={toggle}>Click aquí</Button>
        </p>
        <Form />
      </div>
      <Modal 
        active={active} 
        toggle={toggle}  
      />
    </>
  )
}

export default DataClient