import React, { useState, useContext } from "react"
import Layout from "components/layouts/Layout"
import DataOf from "components/atomic/organisms/DataOf"
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons"
import { EmployeeContext } from 'components/context/EmployeeContext'
import Modal from '../atomic/organisms/Modal'

const Empleados = () => {

  const { employees, findEmployee, deleteEmployee} = useContext(EmployeeContext)

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }
  const columns = [
    {
      title: 'CC',
      dataIndex: 'cedula',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'Télefono',
      dataIndex: 'telefono',
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      employees.length >= 1 ? (
        <EditOutlined
            onClick={() => {
              toggle()
              findEmployee(record.id)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",    
      render: (text, record) =>
      employees.length >= 1 ? (
        <MinusCircleOutlined
            style={{ color: "red"}}
            onClick={() => deleteEmployee(record.id)}
          />
        ) : null,
    },
  ];
  

  return (
    <>
      <Layout
        header={<h1>Empleados</h1>}
        content={
          <DataOf
            name='empleados'
            columns={columns}
            data={employees}
            btnName='Empleado'
            modalFor='empleado'
            />      
        }
        />
      <Modal active={active} toggle={toggle} modalFor='empleado' />
    </>
  )
}

export default Empleados
