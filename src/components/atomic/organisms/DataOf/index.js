import React from 'react'
import Head from 'components/atomic/atoms/Heading'
import { header } from 'components/templates/Step.module.css'
//import Button from 'components/atomic/atoms/Button'
import Table from '../Table'
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'

const DataOf = () => {
    
  return (
    <div>
      <div className={header}>
        <Head>Datos de </Head>
        <ButtonIcon type='secondary' icon='add'>Productos</ButtonIcon>
      </div>
      <Table />
    </div>
  )
}

export default DataOf