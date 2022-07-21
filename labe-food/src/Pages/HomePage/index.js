import React from 'react'
import CardRestaurant from '../../components/CardRestaurant.js'
import { useNavigate } from 'react-router-dom'
import Search from '../../components/Search.js'
import Footer from '../../components/Footer.js'
import Carousel from '../../components/Carousel.js'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <Search />
      <br />
      <button onClick={() => navigate('/restaurante')}>Restaurante</button>
      <button onClick={() => navigate('/')}>Voltar Login</button>
      <br />
      <Carousel />
      <br />
      <CardRestaurant />
      <br />
      <CardRestaurant />
      <br />
      <Footer />
    </div>
  )
}

export default HomePage
