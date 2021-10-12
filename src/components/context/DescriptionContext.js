import React, { createContext, useState } from "react"

import PropTypes from 'prop-types'

export const DescriptionContext = createContext()

const DescriptionContextProvider = ({ children }) => {
    
  const [description, setDescription ] = useState('')

  return (
    <DescriptionContext.Provider
      value={{
        description,
        setDescription
      }}
    >
      {children}
    </DescriptionContext.Provider>
  )
}

DescriptionContextProvider .propTypes = {
  children: PropTypes.node
}

export default DescriptionContextProvider
