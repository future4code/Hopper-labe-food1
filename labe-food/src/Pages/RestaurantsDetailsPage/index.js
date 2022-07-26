import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
import CardRestaurantDetail from '../../Components/CardRestaurantDetail'

const RestaurantsDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <div>
        <button onClick={() => navigate('/carrinho')}>Carrinho</button>
        <button onClick={() => navigate('/home')}>Voltar Home</button>
      </div>
      <br />
      <CardRestaurantDetail />
      <br />
      <CardProduct />
    </div>
  )
}

export default RestaurantsDetailsPage
