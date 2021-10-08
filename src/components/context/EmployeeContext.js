import React, { createContext, useState, useEffect } from "react"
import { EmployeeService } from "services/employee"

export const EmployeeContext = createContext()

const EmployeeContextProvider = ({ children }) => {
  const employeeService = new EmployeeService()

  const [employees, setEmployees] = useState([])
  const [coincidencias, setCoincidencias ] = useState([])
  const [editEmployee, setEditEmployee] = useState(null)

  useEffect(() => {
    employeeService.readAll().then(data => setEmployees(data))
  }, [])

  const createEmployee =employee => {
    employeeService
      .create(employee)
      .then(data => setEmployees([...employees, data]))
  }

  
  const searchIdEmployee = id => {
    const employee = employees.filter(cliente => cliente.identificacion.includes(id)) ;
    setCoincidencias(employee.map(c => c.identificacion));
  };

  const deleteEmployee = id => {
    employeeService
      .delete(id)
      .then(() => setEmployees(employees.filter(p => p.id_employee !== id)))
  }


  const findEmployee = id => {
    const employee = employees.find(p => p.identificacion === id)

    setEditEmployee(employee)
  }


  const updateEmployee = employee => {
employeeService
      .updateemployee()
      .then(data =>
        setEmployees(
          employees.map(p =>
            p.id_employee === employee.id_employee ? data : employee
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
        coincidencias,
        searchIdEmployee,
        findEmployee,
        updateEmployee,
        setEditEmployee,
        editEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider
