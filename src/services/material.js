import axios from 'axios'
import { API_URL } from "./constant";

export class MaterialService {

  create = material => {
    return axios.post(API_URL+'material/', material).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'material/').then(res => res.data)
  }

  update = material => {
    return axios.put(API_URL+'material/', material.id_material).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'material/', id).then(res => res.data)
  }
}