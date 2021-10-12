import axios from 'axios'
import { API_URL } from "./constant";

export class ProductService {

  create = product => {
    return axios.post(API_URL+'product/', product).then(res => res.data)
  }

  readAll = () => {
    return axios.get(API_URL+'product/').then(res => res.data)
  }

  update = product => {
    return axios.put(API_URL+`product/${product.id_producto}`, product).then(res => res.data)
  }

  delete = id => {
    return axios.delete(API_URL+'product/', id).then(res => res.data)
  }
}