import axios from 'axios'
import { API_URL } from "./constant";

export class EmployeeService {

  create = async empleado => {
    return await axios.post(API_URL+'empleado/', empleado).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'empleado/').then(res => res.data)
  }

  update = empleado => {
    return axios.put(API_URL+`empleado/${empleado.id}`, empleado).then(res => res.data)
  }

  delete = empleado => {
    return axios.delete(API_URL+`empleado/${empleado.id}`, empleado).then(res => res.data)
  }
}