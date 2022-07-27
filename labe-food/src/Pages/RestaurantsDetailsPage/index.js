import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
import CardRestaurantDetail from '../../Components/CardRestaurantDetail'
import { NomeApp, TelaRestaurante, NomeCategoria } from './styled'

const RestaurantsDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <TelaRestaurante>
      <NomeApp>Rappi4</NomeApp>
      <div>
        <button onClick={() => navigate('/carrinho')}>Carrinho</button>
        <button onClick={() => navigate('/home')}>Voltar Home</button>
      </div>

      <CardRestaurantDetail />
      
      <NomeCategoria>
        Categoria
      </NomeCategoria>

      <CardProduct />

    </TelaRestaurante>
  )
}

export default RestaurantsDetailsPage
