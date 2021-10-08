import React, { useState } from "react"
import LayoutSteps from "components/templates/Steps.js"
import { Modal } from "antd"
import Button from "components/atomic/atoms/Button"
import Material from "../Steps/MaterialsToUse"
import Employee from "../Steps/AddEmployee"
import Expenses from "../Steps/OtherExpenses"
import Stepper from "components/atomic/molecules/Stepper"
//import { AnalisysContext } from "components/context/AnalisysContext"
const steps = [
  "Materiales a usar",
  "Agregar mano de obra",
  "Agregar otros gastos",
]

const BasicModal = ({ active, toggle, modalFor }) => {
  //const { createAnalisys } = useContext(AnalisysContext)

  const [step, setStep] = useState(0)
  const [analisis, setAnalisis] = useState({
    analisis: {
      observaciones: "",
      total: 0,
    },
    responsables: [],
    materiales: [],
    otros_gastos: [],
  })

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleNext = () => {
    setStep(step + 1)

    if (step === 3) {
      //createAnalisys(analisis)
      console.log(analisis)
    }
  }
  return (
    <Modal
      title={`Agregar ${modalFor}`}
      visible={active}
      onOk={toggle}
      onCancel={toggle}
      width={900}
      footer={[
        <Button key='back' type='secondary' onClick={handleBack}>
          Atrás
        </Button>,
        <Button key='next' type='primary' onClick={handleNext}>
          Siguiente
        </Button>,
      ]}
    >
      <LayoutSteps
        header={<Stepper steps={steps} step={step} />}
        content={
          <>
            {step === 0 ? (
              <Material
                analisis={analisis}
                setAnalisis={setAnalisis}
              />
            ) : step === 1 ? (
              <Employee 
                analisis={analisis}
                setAnalisis={setAnalisis} 
              />
            ) : (
              <Expenses />
            )}
          </>
        }
      />
    </Modal>
  )
}

export default BasicModal
