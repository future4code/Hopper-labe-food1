import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { getHeader } from '../services/header'

export const getHistory = setOrderHistory => {
  axios
    .get(`${BASE_URL}/orders/history`, getHeader())
    .then(res => {
      setOrderHistory(res.data.orders)
      console.log(res)
    })
    .catch(err => {
      alert(err.response.data.message)
    })
}
