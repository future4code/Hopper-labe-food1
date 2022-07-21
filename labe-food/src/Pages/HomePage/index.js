import React from 'react'
import CardRestaurant from '../../Components/CardRestaurant.js'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search.js'
import Footer from '../../Components/Footer.js'
import Carousel from '../../Components/Carousel.js'
import {
  goToLoginPage,
  goToRestaurant,
  goToSearch
} from '../../Routes/coordinator.js'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <Search />
      <br />
      <button onClick={() => goToRestaurant(navigate)}>Restaurante</button>
      <button onClick={() => goToLoginPage(navigate)}>Voltar Login</button>
      <button onClick={() => goToSearch(navigate)}>Buscar</button>
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
