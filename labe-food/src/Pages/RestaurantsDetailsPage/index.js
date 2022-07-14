import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantsDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/carrinho')}>Carrinho</button>
      <button onClick={() => navigate('/home')}>Voltar Home</button>
    </div>
  )
}

export default RestaurantsDetailsPage
