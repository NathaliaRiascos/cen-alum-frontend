import React, { useState } from "react"
import { Modal } from "antd"
import PropTypes from 'prop-types'
import Button from "components/atomic/atoms/Button"
import FormCliente from "../Form/Client"
import FormProducto from "../Form/Product"
import FormGasto from "../Form/Expenses"
import FormEmpleado from "../Form/Employee"
import FormMaterial from "../Form/Material"

const BasicModal = ({
  active,
  toggle,
  modalFor
}) => {

  const [boton, setBoton] = useState(false)

  const agregar = () => {
    setBoton(!boton)
  }

  return (
    <Modal
      title={`Agregar ${modalFor}`}
      visible={active}
      onOk={toggle}
      onCancel={toggle}
      footer={[
        <Button key='cancel' type='secondary'>
          Cancelar
        </Button>,
        <Button key='save' type='primary' onClick={agregar}>
          Agregar
        </Button>,
      ]}
    >
      {modalFor === "cliente" ? (
        <FormCliente
          added={boton}
          active={active}
          closeModal={toggle}
        />
      ) : modalFor === "empleado" ? (
        <FormEmpleado
          added={boton}
          active={active}
          setAdd={setBoton}
          closeModal={toggle}
        />
      ) : modalFor === "producto" ? (
        <FormProducto
          added={boton}
          active={active}
          setAdd={setBoton}
          closeModal={toggle}
        />
      ) : modalFor === "material" ? (
        <FormMaterial
          added={boton}
          active={active}
          setAdd={setBoton}
          closeModal={toggle}
        />
      ) : (
        <FormGasto
          added={boton}
          active={active}
          setAdd={setBoton}
          closeModal={toggle}
        />
      )}
    </Modal>
  )
  
}

BasicModal.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func,
  modalFor: PropTypes.string,
}


export default BasicModal
