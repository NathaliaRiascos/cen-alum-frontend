import React, { useState, useContext } from 'react'
//import LayoutSteps from "components/templates/Steps.js"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import { MaterialContext } from 'components/context/MaterialContext'
import {MinusCircleOutlined, EditOutlined } from '@ant-design/icons';
import Table from '../../Table'
import Modal from '../../Modal'


const Material = () => {

  const {
    materialsUsed,
    deleteMaterialsUsed,
    findMaterial
  } = useContext(MaterialContext)

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }
  
const columns = [
  {
    title: 'Ref',
    dataIndex: 'referencia',
  },
  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
  },
  {
    title: 'Longitud(mm)',
    dataIndex: 'longitud',
  },
  {
    title: 'Cantidad',
    dataIndex: 'cantidad',
  },
  {
    title: 'Precio',
    dataIndex: 'total',
  },
  {
    title: "",
    dataIndex: "",
    render: (text, record) =>
    materialsUsed.length >= 1 ? (
      <EditOutlined
          onClick={() => {
            toggle()
            findMaterial(record.key)
          }}
        />
      ) : null,
  },
  {
    title: "",
    dataIndex: "",
    
    render: (text, record) =>
    materialsUsed.length >= 1 ? (
      <MinusCircleOutlined
          style={{ color: "red"}}
          onClick={() => deleteMaterialsUsed(record.key)}
        />
      ) : null,
  },
];

 
  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Material</ButtonIcon>
        <Head>materiales</Head>
      </div>
      <Table data={materialsUsed} columns={columns} />
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor='material'
      />
    </div>
  )
}

export default Material 