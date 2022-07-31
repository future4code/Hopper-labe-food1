import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { getHeader } from './header';

export const getOrdersHistory = (setOrderHistory) => {

        axios
        .get(`${BASE_URL}/orders/history`, getHeader())
        .then((response) => {
            setOrderHistory(response.data.orders)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.response.data.message)
            
        })
}