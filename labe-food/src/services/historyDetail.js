import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/url';
import { getHeader } from '../services/header';

export function useHistoryDetail() {
  const [data, setData] = useState({});

  useEffect(() => {
    getHeader()
    
    axios
      .get(`${BASE_URL}/orders/history`, getHeader())
      .then((response) => {
        setData(response.data.orders);
        // console.log(response.data.orders)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [data];
}