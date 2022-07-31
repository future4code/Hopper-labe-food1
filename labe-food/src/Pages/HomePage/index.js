import { BASE_URL } from '../../constants/url.js'
import CardRestaurant from '../../Components/CardRestaurant.js'
import { useGetRest } from '../../hooks/useGetRest.js'
import { useState } from 'react'
import { NomeApp, Buscador, TelaHome } from './styled.js'
import Footer from '../../Components/Footer.js'
import { goToRestaurant } from '../../Routes/coordinator.js'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from './../../hooks/useProtectedPage';
import TypeCategory from '../../Components/TypeCategory.js'

const HomePage = () => {
  useProtectedPage();
  const [infoRestaurante] = useGetRest(`${BASE_URL}/restaurants`)
  const [busca, setBusca] = useState('')
  const [select, setSelect] = useState('')

  const navigate = useNavigate()

  //filtrando por categoria
  const restauranteCategoria = infoRestaurante.filter(item =>
    item.category.toLowerCase().includes(select.toLocaleLowerCase())
  )
  //filtrando por restaurante
  const restauranteFiltrado = restauranteCategoria.filter(i =>
    i.name.toLowerCase().includes(busca.toLocaleLowerCase())
  )

  const restaurant = restauranteFiltrado.map(item => (
    <CardRestaurant
      key={item.id}
      id={item.id}
      logoUrl={item.logoUrl}
      name={item.name}
      shipping={item.shipping}
      deliveryTime={item.deliveryTime}
      navigate={navigate}
      goToRestaurant={goToRestaurant}
    />
  ))

  return (
    <TelaHome>
      <NomeApp>Rappi4</NomeApp>
      <Buscador value={busca} onChange={e => setBusca(e.target.value)} />

      {busca === '' ? <TypeCategory setSelect={setSelect} /> : null}
      {busca && restaurant.length === 0 ? <p>Não encontramos :(</p> : null}
      {restaurant}
      <Footer />
    </TelaHome>
  )
}

export default HomePage
