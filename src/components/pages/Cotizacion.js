import React from 'react'
import { Container } from 'components/templates/Cotizacion.module.css'
//import DataClient from 'components/atomic/organisms/Steps/DataClient'
//import Analisis from 'components/atomic/organisms/Steps/CreateAnalysis'
import DataOf from 'components/atomic/organisms/DataOf'
import Stepper from 'components/atomic/molecules/Stepper'

const Cotizacion = () => (
  <div className={Container}>
    <Stepper />
    {/*<Analisis />
    <DataClient />*/}
    <DataOf />
  </div>
)

export default Cotizacion