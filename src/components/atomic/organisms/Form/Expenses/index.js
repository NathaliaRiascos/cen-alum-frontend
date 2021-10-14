import React, { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Input from 'components/atomic/atoms/Input'
import TextArea from 'components/atomic/atoms/TextArea'
import { container } from 'components/templates/Form.module.css'
import { ExpensesContext } from 'components/context/OtherExpensesContext'

const Formulario = ({ added, active, setAdd, closeModal}) => {

  const { 
    updateOtherExpenses,
    setOtherExpenses,
    otherExpenses,
    setEditExpense,
    editExpense
  } = useContext(ExpensesContext)

  const initialState = {
    descripcion: '',
    precio: 0
  }
  const [expense, setExpense] = useState(initialState)

  const {descripcion, precio} =  expense

  useEffect(() => {
    if (active) {

      if (editExpense) setExpense(editExpense)
 
      if (added && descripcion && precio) {
        
        if (editExpense) {
          updateOtherExpenses(expense)
        } 
        
        if (!editExpense){
          expense.key = uuidv4()
          setOtherExpenses([...otherExpenses, expense])
        }

        setEditExpense(null)
        setExpense(initialState)
        setAdd()
        closeModal()
      }
    }
  }, [added, active])

  const handleChange = e => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={container}>
      <TextArea
          label='Descripción'
          name='descripcion'
          value={descripcion}
          type='text'
          handleChange={handleChange}
      />
      <Input
          label='Precio'
          name='precio'
          value={precio}
          type='number'
          handleChange={handleChange}
      />
    </form>
  )
}
  
  export default Formulario