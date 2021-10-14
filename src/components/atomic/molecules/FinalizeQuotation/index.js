import React, { useContext } from "react"
import Head from "components/atomic/atoms/Heading"
import Paragraph from "components/atomic/atoms/Paragraph"
import TextArea from "components/atomic/atoms/TextArea"
import { contenido } from "components/templates/Step.module.css"
import { DescriptionContext } from "components/context/DescriptionContext"

const DataQuotation = () => { 
  const {
    description,
    setDescription
  } = useContext(DescriptionContext)

  return (
    <div className={contenido}>
      <Head>Finalizar</Head>
      <Paragraph>
        Si desea agregar alguna observación llene el siguiente campo
      </Paragraph>
      <TextArea 
        size={7}
        value={description}
        name='valor'
        label='Descripción'
        handleChange={e => setDescription(e.target.value)} 
      />
    </div>
  )
}

export default DataQuotation
