import React, { useState, useContext }  from 'react'
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'
import Head from 'components/atomic/atoms/Heading'
import { contenido_header } from 'components/templates/Step.module.css'
import {MinusCircleOutlined, EditOutlined } from '@ant-design/icons';
import Table from '../../Table'
import TextArea from 'components/atomic/atoms/TextArea'
import Modal from '../../Modal'
import { ExpensesContext } from 'components/context/OtherExpensesContext'
import { AnalisysContext } from 'components/context/AnalisysContext';

const Expenses = () => {

  const { 
    findOtherExpenses,
    deleteOtherExpenses,
    otherExpenses
  } = useContext(ExpensesContext)

  const {
    dataAnalisys, 
    setDataAnalisys
  } = useContext(AnalisysContext)

  const { observaciones } = dataAnalisys


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
      title: "Precio",
      dataIndex: "precio",
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
      otherExpenses.length >= 1 ? (
        <EditOutlined
            onClick={() => {
              toggle()
              findOtherExpenses(record.key)
            }}
          />
        ) : null,
    },
    {
      title: "",
      dataIndex: "",
      
      render: (text, record) =>
      otherExpenses.length >= 1 ? (
        <MinusCircleOutlined
            style={{ color: "red"}}
            onClick={() => deleteOtherExpenses(record.key)}
          />
        ) : null,
    },
  ]

  return (
    <div>
      <div className={contenido_header}>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>Gastos</ButtonIcon>
        <Head>Otros gastos</Head>
      </div>
      <Table data={otherExpenses} columns={columns} />
      <div>
        <Head>Observaciones</Head>
        <TextArea 
          value={observaciones} 
          handleChange={e => setDataAnalisys({
            ...dataAnalisys,
            observaciones: e.target.value
          })} 
        />
      </div>
      <div>
        <Head>Total general</Head>
        34546
      </div>
      <Modal 
        active={active} 
        toggle={toggle}
      />
    </div>
  )
}

export default Expenses