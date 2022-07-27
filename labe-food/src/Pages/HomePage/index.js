import React from 'react'
import CardRestaurant from '../../Components/CardRestaurant'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search'
import Footer from '../../Components/Footer'
import Carousel from '../../Components/Carousel'
import {
  goToLoginPage,
  goToRestaurant,
  goToSearch
} from '../../Routes/coordinator.js'
import { TelaHome, NomeApp } from './styled'


const HomePage = () => {
  const navigate = useNavigate()
  return (
    <TelaHome>
      <NomeApp>Rappi4</NomeApp>

      <Search />

      <div>
      <button onClick={() => goToRestaurant(navigate)}>Restaurante</button>
      <button onClick={() => goToLoginPage(navigate)}>Voltar Login</button>
      <button onClick={() => goToSearch(navigate)}>Buscar</button>
      </div>

      <Carousel />

      <CardRestaurant />

      <CardRestaurant />

      <Footer />

    </TelaHome>
  )
}

export default HomePage
