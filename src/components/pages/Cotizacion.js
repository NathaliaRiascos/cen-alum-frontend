import React from "react"

import DataClient from "components/atomic/organisms/Steps/DataClient"
import Analisis from "components/atomic/organisms/Steps/CreateAnalysis"
import DataQuotation from "components/atomic/organisms/Steps/DataQuotation"
import FinalizeQuotation from "components/atomic/molecules/FinalizeQuotation"

//import Steps from "components/templates/Steps"
//import Button from "components/atomic/atoms/Button"

//import { useCounter } from "components/hooks/useCounter"
import { useStepper } from "components/hooks/useStepper"

const Cotizacion = () => {



  const steps = [
    "Datos cliente",
    "Crear análisis de costo",
    "Datos de cotización",
    "Finalizar",
  ]
 
  const contents = [
    <DataClient key='dataclient' />,
    <Analisis key='analisis' />,
    <DataQuotation key='quotation' />,
    <FinalizeQuotation key='finalize' />
  ]


  const {
    ComponentSteps
  } = useStepper(steps, contents, true)

  return (
    <ComponentSteps/>
  )
}

export default Cotizacion
