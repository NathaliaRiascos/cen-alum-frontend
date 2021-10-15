import React, { useState, useContext } from "react"
import Layout from "components/layouts/Layout"
import DataOf from "components/atomic/organisms/DataOf"
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons"
import { ClientContext } from "components/context/ClientContext"
import Modal from '../atomic/organisms/Modal'

const Clientes = () => {
  const { clients, findClient, deleteClient } = useContext(ClientContext)

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }


  const columns = [
    {
      title: "Identificacion",
      dataIndex: "identificacion",
    },
    {
      title: "Nombe",
      dataIndex: "nombre",
    },
    {
      title: "Direccion",
      dataIndex: "direccion",
    },
    {
      title: "Télefono",
      dataIndex: "telefono",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      clients.length >= 1 ? (
        <EditOutlined
            onClick={() => {
                toggle()
                findClient(record.id_cliente)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      clients.length >= 1 ? (
        <MinusCircleOutlined
            style={{ color: "red" }}
            onClick={() => deleteClient(record.id_cliente)}
          />
        ) : null,
    },
  ]

  return (
    <>
      <Layout
        header={<h1>Clientes</h1>}
        content={
          <DataOf
            name='clientes'
            columns={columns}
            data={clients}
            btnName='Cliente'
            modalFor='cliente'
            />      
        }
        />
      <Modal active={active} toggle={toggle} modalFor='cliente' />
    </>
  )
}

export default Clientes
