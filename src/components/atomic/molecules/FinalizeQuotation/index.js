import React from 'react';
import Head from 'components/atomic/atoms/Heading'
import Paragraph from 'components/atomic/atoms/Paragraph'
import TextArea from 'components/atomic/atoms/TextArea'
import { contenido } from 'components/templates/Step.module.css'

const DataQuotation = () => (
  <div className={contenido}>
    <Head>Finalizar</Head>
    <Paragraph>Si desea agregar alguna observación llene el siguiente campo</Paragraph>
    <TextArea size={7}/>
  </div>

)

export default DataQuotation