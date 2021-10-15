import React, { useState, useContext } from "react"
import Layout from "components/layouts/Layout"
import DataOf from "components/atomic/organisms/DataOf"
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons"
import { MaterialContext } from 'components/context/MaterialContext'
import Modal from '../atomic/organisms/Modal'

const Materiales = () => {

  const { materials, findMaterial, deleteMaterial} = useContext(MaterialContext)

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
      title: 'Precio',
      dataIndex: 'precio',
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      materials.length >= 1 ? (
        <EditOutlined
            onClick={() => {
              toggle()
              findMaterial(record.id_material)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",
      
      render: (text, record) =>
      materials.length >= 1 ? (
        <MinusCircleOutlined
            style={{ color: "red"}}
            onClick={() => deleteMaterial(record.id_material)}
          />
        ) : null,
    },
  ];
  

  return (
    <>
      <Layout
        header={<h1>Materiales</h1>}
        content={
          <DataOf
            name='materiales'
            columns={columns}
            data={materials}
            btnName='Material'
            modalFor='material'
            />      
        }
        />
      <Modal active={active} toggle={toggle} modalFor='material' />
    </>
  )
}

export default Materiales
