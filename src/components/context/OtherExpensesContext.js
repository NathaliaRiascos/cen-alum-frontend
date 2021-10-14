import React, { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ExpensesContext = createContext();

const ExpensesContextProvider = ({ children }) => {


  const [otherExpenses, setOtherExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const findOtherExpenses = id => {  
    const expense = otherExpenses.find(p => p.key === id);  
    setEditExpense(expense);
  };

  const updateOtherExpenses = product => {
    setOtherExpenses(
      otherExpenses.map(p => (p.key === product.key ? product: p))
    )

    setEditExpense(null);
  };

  
  const deleteOtherExpenses = id => {
    setOtherExpenses(otherExpenses.filter(p => p.key !== id))
  }

  return (
    <ExpensesContext.Provider
      value={{
        findOtherExpenses,
        deleteOtherExpenses,
        updateOtherExpenses,
        setOtherExpenses,
        otherExpenses,
        setEditExpense,
        editExpense
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

ExpensesContextProvider.propTypes = {
  children: PropTypes.node
}

export default ExpensesContextProvider;