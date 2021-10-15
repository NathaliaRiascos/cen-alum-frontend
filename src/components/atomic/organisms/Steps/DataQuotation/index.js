import React, { useState, useContext } from "react"
import DataOf from "../../DataOf"
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons"
import { ProductContext } from "components/context/ProductContext"
import Modal from "../../Modal"

const DataQuotation = () => {
  const { productsDo, deleteProductDo, findProductDo } =
    useContext(ProductContext)

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  const columns = [
    {
      title: "Descripcion",
      dataIndex: "descripcion",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
    },
    {
      title: "Precio unidad",
      dataIndex: "preciototal",
    },
    {
      title: "Total",
      dataIndex: "precio_unidad",
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
        productsDo.length >= 1 ? (
          <EditOutlined
            onClick={() => {
              toggle()
              findProductDo(record.key)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",

      render: (text, record) =>
        productsDo.length >= 1 ? (
          <MinusCircleOutlined
            style={{ color: "red" }}
            onClick={() => deleteProductDo(record.key)}
          />
        ) : null,
    },
  ]

  return (
    <>
      <DataOf
        name='cotización'
        columns={columns}
        data={productsDo}
        modalFor='producto'
        btnName='Productos'
      />
      <Modal active={active} toggle={toggle} modalFor='producto' />
    </>
  )
}

export default DataQuotation
