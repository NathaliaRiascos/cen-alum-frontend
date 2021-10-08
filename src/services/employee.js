import axios from 'axios'
import { API_URL } from "./constant";

export class EmployeeService {

  create = empleado => {
    return axios.post(API_URL+'empleado/', empleado).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'empleado/').then(res => res.data)
  }

  update = empleado => {
    return axios.put(API_URL+'empleado/', empleado.id_empleado).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'empleado/', id).then(res => res.data)
  }
}