import axios from 'axios';
import { useState, useEffect } from 'react';
import { getHeader } from '../services/header';

export function useGetRest(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHeader()
    
    axios
      .get(url, getHeader())
      .then((response) => {
        setData(response.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return [data];
}
