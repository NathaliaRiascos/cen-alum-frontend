import axios from 'axios'
import { API_URL } from "./constant";

export class ClientService {

  create = client => {
    return axios.post(API_URL+'client/', client).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'client/').then(res => res.data)
  }

  update = client => {
    return axios.put(API_URL+`client/${client.id_cliente}`, client).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'client/', id).then(res => res.data)
  }
}