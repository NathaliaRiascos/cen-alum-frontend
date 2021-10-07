import React from 'react'
import Head from 'components/atomic/atoms/Heading'
import Button from 'components/atomic/atoms/Button'
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import { container, buttons} from 'components/templates/Step.module.css'

const CreateAnalysis = () => {

  return (
    <>
      <div className={container}>
        <Head type='h2'>Crear análisis de costo</Head>
        <p>
          En <b> Analisis de costo </b> podras ver  el costo total de materiales necesarios 
          para la realización del trabajo cotizado, 
          ingresar el valor de mano de obra y demás gastos 
          necesarios para la realización del trabajo
        </p>
        <div className={buttons}>
          <ButtonIcon type='item' icon='more'>Crear analisis de costo</ButtonIcon>
          <ButtonIcon type='item' icon='link'>Vincular analisis de costo</ButtonIcon>
        </div>

        <Button type='enlace'>Click aquí para ver el Análisis de costos</Button>
      </div>
    </>
  )
}

export default CreateAnalysis