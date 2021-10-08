import axios from 'axios'
import { API_URL } from "./constant";

export class AnalisysService {

  create = analisis => {
    return axios.post(API_URL+'analisis/', analisis).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'analisis/').then(res => res.data)
  }

  update = analisis => {
    return axios.put(API_URL+'analisis/', analisis.id_analisis).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'analisis/', id).then(res => res.data)
  }
}