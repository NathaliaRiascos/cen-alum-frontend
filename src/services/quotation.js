import axios from 'axios'
import { API_URL } from "./constant";

export class QuotationService {

  create = quotation => {
    return axios.post(API_URL+'cotizaciones/', quotation).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'cotizaciones/').then(res => res.data)
  }

  update = quotation => {
    return axios.put(API_URL+'cotizaciones/', quotation.id_cliente).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'cotizaciones/', id).then(res => res.data)
  }
}