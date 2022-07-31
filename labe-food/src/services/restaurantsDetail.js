import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/url';
import { getHeader } from '../services/header';

export function useRestaurantsDetail(id) {
  const [data, setData] = useState({});

  useEffect(() => {
    getHeader()
    
    axios
      .get(`${BASE_URL}/restaurants/${id}`, getHeader())
      .then((response) => {
        setData(response.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return [data];
}