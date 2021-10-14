import React from "react"
import { Modal } from "antd"
import PropTypes from 'prop-types'

import Employee from "../Steps/AddEmployee"
import Expenses from "../Steps/OtherExpenses"
import Material from "../Steps/MaterialsToUse"
//import { useAnalisis } from "components/hooks/useAnalisis"

import { useStepper } from "components/hooks/useStepper"


const steps = [
  "Materiales a usar",
  "Agregar mano de obra",
  "Agregar otros gastos",
]

const contents = [
  <Material key='material' />,
  <Employee key='employee'/>,
  <Expenses key='expenses' />
]
const BasicModal = ({ active, toggle, modalFor }) => {

  //const { cambiarValores } = useAnalisis() 
  const {
    ComponentSteps,
    BtnBack,
    BtnNext
  } = useStepper(steps, contents, false)

  return (
    <Modal
      title={`Agregar ${modalFor}`}
      visible={active}
      onOk={toggle}
      onCancel={toggle} 
      width={900}
      footer={[
        <BtnBack key='back'/>,
        <BtnNext key='next' />
      ]}
    >
      <ComponentSteps />
    </Modal>
  )
}

BasicModal.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func,
  modalFor: PropTypes.string,
}

export default BasicModal
