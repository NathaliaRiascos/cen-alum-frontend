import React, { useState } from 'react'
//import { useForm } from 'hooks/useForm'
import Head from 'components/atomic/atoms/Heading'
import Form from '../../Form/Client'
import Modal from '../../Modal'
import Button from 'components/atomic/atoms/Button'
import Paragraph from 'components/atomic/atoms/Paragraph'
import { contenido } from 'components/templates/Step.module.css'


const DataClient = () => {


  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={contenido}>
        <Head type='h2'>Datos de cliente</Head>
        <Paragraph>
          ¿El cliente ya se encuentra registrado? 
          <Button type='enlace' onClick={toggle}>Click aquí</Button>
        </Paragraph>
        <Form
        />
      </div>
      <Modal 
        active={active}
        toggle={toggle}
        modalFor='cliente'
      />
    </>
  )
}

export default DataClient