import React, { createContext, useState, useEffect } from "react"
import { EmployeeService } from "services/employee"
import PropTypes from 'prop-types'

export const EmployeeContext = createContext()

const EmployeeContextProvider = ({ children }) => {
  const employeeService = new EmployeeService()

  const [employees, setEmployees] = useState([])
  const [workforce, setWorkforce] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null)

  useEffect(() => {
    updateEmployees()
  }, [])

  const createEmployee = employee => {
    console.log(employee)
    employeeService
      .create(employee)
      .then(data => setEmployees([...employees, data]))
  }

  const updateEmployees = () => {
    employeeService.readAll().then(data => setEmployees(data))
  }

  const deleteEmployee = id => {
    employeeService
      .delete(id)
      .then(() => setEmployees(employees.filter(p => p.id_employee !== id)))
  }


  const findEmployee = id => {
    const employee = employees.find(p => p.id === id)
    setEditEmployee(employee)
  }


  const updateEmployee = employee => {
    employeeService
      .updateemployee() 
      .then(data =>
        setEmployees(
          employees.map(p =>
            p.id === employee.id ? data : employee
          )
        )
      )

    setEditEmployee(null)
  }

  return (
    <EmployeeContext.Provider
      value={{
        createEmployee,
        deleteEmployee,
        findEmployee,
        workforce,
        updateEmployees,
        setWorkforce,
        updateEmployee,
        setEditEmployee,
        editEmployee,
        employees
      }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

EmployeeContextProvider.propTypes = {
  children: PropTypes.node
}

export default EmployeeContextProvider
