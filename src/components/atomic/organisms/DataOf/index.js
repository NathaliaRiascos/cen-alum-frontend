import React, { useState } from 'react'
import Head from 'components/atomic/atoms/Heading'
import { header } from 'components/templates/Container.module.css'
import Modal from '../Modal'
import Table from '../Table'
import PropTypes from "prop-types"
import ButtonIcon from 'components/atomic/molecules/ButtonIcon'

const DataOf = ({name, columns, data, modalFor, btnName}) => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div style={{marginTop: '30px'}}>
      <div className={header}>
        <Head>Datos de {name} </Head>
        <ButtonIcon type='secondary' icon='add'  onClick={toggle}>{btnName}</ButtonIcon>
      </div>
      <Table data={data} columns={columns}/>
      <Modal 
        active={active} 
        toggle={toggle}
        modalFor={modalFor}
      />
    </div>
  )
}

DataOf.propTypes = {
  name: PropTypes.string,
  modalFor: PropTypes.string,
  btnName: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array
}


export default DataOf