import axios from 'axios'
import { API_URL } from "./constant";

export class MaterialService {

  create = async material => {
    const resultado = await axios.post(API_URL+'material/', material).then(res => res.data)
    return resultado
  }

  readAll = () => {
    return axios.get(API_URL+'material/').then(res => res.data)
  }

  update = material => {
    return axios.put(API_URL+`material/${material.id_material}`, material).then(res => res.data)
  }

  delete = material => {
    return axios.delete(API_URL+`material/${material.id_material}`, material).then(res => res.data)
  }
}