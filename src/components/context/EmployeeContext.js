import React, { createContext, useState, useEffect } from "react"
import { EmployeeService } from "services/employee"
import PropTypes from "prop-types"

export const EmployeeContext = createContext()

const EmployeeContextProvider = ({ children }) => {
  const employeeService = new EmployeeService()

  const [employees, setEmployees] = useState([])
  const [workforce, setWorkforce] = useState([])
  const [editEmployee, setEditEmployee] = useState(null)

  useEffect(() => {
    updateEmployees()
  }, [])

  const createEmployee = (employee, otrosdatos) => {
    const { salarioEmpleado } = otrosdatos
    console.log(employee)
    employeeService.create(employee).then(data => {
      if (otrosdatos) {
        employee.salario = salarioEmpleado
        employee.id = data.id
        setWorkforce([...workforce, employee])
      }
    })
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
    const empleado = workforce.find(p => p.key === id)
    const epd = empleado ? empleado : employee
    setEditEmployee(epd)
  }

  const updateEmployee = employee => {
    const { id, nombre, cedula, direccion, telefono, email } = employee

    const empleado = {
      id,
      nombre,
      cedula,
      direccion,
      telefono,
      email,
    }

    console.log(empleado)
    employeeService
      .update(empleado)
      .then(data =>
        setEmployees(
          employees.map(p => (p.id === empleado.id ? data : empleado))
        )
      )
    setEditEmployee(null)
  }

  const updateWorkforce = employee => {
    setWorkforce(workforce.map(p => (p.key === employee.key ? employee : p)))
    console.log(employee)
    updateEmployee(employee)
  }

  const deleteWorkforce = id => {
    setWorkforce(workforce.filter(p => p.key !== id))
  }

  return (
    <EmployeeContext.Provider
      value={{
        createEmployee,
        deleteEmployee,
        findEmployee,
        workforce,
        updateEmployees,
        updateWorkforce,
        setWorkforce,
        deleteWorkforce,
        updateEmployee,
        setEditEmployee,
        editEmployee,
        employees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

EmployeeContextProvider.propTypes = {
  children: PropTypes.node,
}

export default EmployeeContextProvider
