import React, { useState, useContext } from 'react'
//import LayoutSteps from "components/templates/Steps.js"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import Table from '../../Table'
import Modal from '../../Modal'
import { EmployeeContext } from 'components/context/EmployeeContext'
import {MinusCircleOutlined, EditOutlined } from '@ant-design/icons';

const Employee = () => {

  const {
    workforce,
    findEmployee,
    deleteWorkforce
  } = useContext(EmployeeContext)


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
      title: 'Salario',
      dataIndex: 'salario',
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      workforce.length >= 1 ? (
        <EditOutlined
            onClick={() => {
              toggle()
              findEmployee(record.key)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",    
      render: (text, record) =>
      workforce.length >= 1 ? (
        <MinusCircleOutlined
            style={{ color: "red"}}
            onClick={() => deleteWorkforce(record.key)}
          />
        ) : null,
    },
  ];

  
  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Empleado</ButtonIcon>
        <Head>Empleados</Head>
      </div>
      <Table data={workforce} columns={columns} />
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor='empleado'
      />
    </div>
  )
}

export default Employee