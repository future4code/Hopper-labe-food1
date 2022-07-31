import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
import CardRestaurantDetail from '../../Components/CardRestaurantDetail'
import { useGetRest } from '../../hooks/useGetRest'
import { NomeApp, TelaRestaurante, NomeCategoria } from './styled'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from './../../hooks/useProtectedPage';

const RestaurantsDetailsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params =  useParams();
  const [infoRestauranteId] = useGetRest(`${BASE_URL}/${params.id}`);

  // console.log(infoRestauranteId)
  // useEffect (() => {
  //   infoRestauranteId 
  // }, []) 

  return (
    <TelaRestaurante>
      <NomeApp>Rappi4</NomeApp>
      <div>
        <button onClick={() => navigate('/carrinho')}>Carrinho</button>
        <button onClick={() => navigate('/home')}>Voltar Home</button>
      </div>



        <CardRestaurantDetail
          
        />
        
        <NomeCategoria>
          Categoria
        </NomeCategoria>

        <CardProduct />


    </TelaRestaurante>
  )
}

export default RestaurantsDetailsPage
