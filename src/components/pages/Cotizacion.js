import React, { useState } from "react"
import LayoutSteps from "components/templates/Steps.js"
//import {buttons} from "components/templates/Step.module.css"
import DataClient from "components/atomic/organisms/Steps/DataClient"
import Analisis from "components/atomic/organisms/Steps/CreateAnalysis"
import DataQuotation from "components/atomic/organisms/Steps/DataQuotation"
import FinalizeQuotation from "components/atomic/molecules/FinalizeQuotation"
import Stepper from "components/atomic/molecules/Stepper"
import Button from "components/atomic/atoms/Button"

const steps = [
  "Datos cliente",
  "Crear análisis de costo",
  "Datos de cotización",
  "Finalizar",
]

const Cotizacion = () => {
  const [step, setStep] = useState(0)

  /*
  const [wasAdded, setWasAdded ] = useState(false)

  const [quotation, setQuotation] = {
    id_cliente: 0,
    fecha: '',
    observaciones: '',
    total: 0,
    id_analisisdecosto: null,
    productos: []
  }

  const handleQuotation = e => {
    setQuotation({
      ...quotation,
      [e.target.name]: e.target.value
    })
  }

  const getProducts = products => {
    setQuotation({
      ...quotation,
      productos: products,
    })
  }
*/
  const handleBack = () => {
    setStep(step - 1)
  }

  const handleNext = () => {
    setStep(step + 1)
    //if (step > 4) setWasAdded(!wasAdded)
  }

  return (
    <LayoutSteps
      header={
        <Stepper steps={steps} step={step} />
      }
      content={
        <>
          {step === 0 ? (
            <DataClient/>
          ) : step === 1 ? (
            <Analisis />
          ) : step === 2 ? (
            <DataQuotation />
          ) : <FinalizeQuotation />}
        </>
      }
      footer={
        <div>
          <Button type='secondary' onClick={handleBack}>
            Atrás
          </Button>
          <Button type='primary' onClick={handleNext}>
            Siguiente
          </Button>
        </div>
      }
    />
  )
}

export default Cotizacion
