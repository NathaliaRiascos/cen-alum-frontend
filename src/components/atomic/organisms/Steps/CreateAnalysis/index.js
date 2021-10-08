import React, { useState } from 'react'
import Head from 'components/atomic/atoms/Heading'
import Button from 'components/atomic/atoms/Button'
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Paragraph from 'components/atomic/atoms/Paragraph'
import {buttons} from './Analisys.module.css'
import { contenido } from 'components/templates/Step.module.css'
import Modal from '../../Modal/Analisys'

const CreateAnalysis = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={contenido}>
        <Head type='h2'>Crear análisis de costo</Head>
        <Paragraph>
          En <b> Analisis de costo </b> podras ver  el costo total de materiales necesarios 
          para la realización del trabajo cotizado, 
          ingresar el valor de mano de obra y demás gastos 
          necesarios para la realización del trabajo
        </Paragraph>
        <div className={buttons}>
          <ButtonIcon type='item' icon='more' onClick={toggle}>Crear analisis de costo</ButtonIcon>
          <ButtonIcon type='item' icon='link'>Vincular analisis de costo</ButtonIcon>
        </div>

        <Button type='enlace'>Click aquí para ver el Análisis de costos</Button>
      </div>
      <Modal 
        active={active}
        toggle={toggle}
        modalFor='material'
      />
    </>
  )
}

export default CreateAnalysis