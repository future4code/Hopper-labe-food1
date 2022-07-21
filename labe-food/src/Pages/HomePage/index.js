import React from 'react'
import CardRestaurant from '../../Components/CardRestaurant.js'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search.js'
import Footer from '../../Components/Footer.js'
import Carousel from '../../Components/Carousel.js'

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
