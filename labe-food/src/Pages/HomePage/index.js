import styled from 'styled-components';
import { BASE_URL } from '../../constants/url.js';
import CardRestaurant from '../../Components/CardRestaurant.js';
import { useGetRest } from '../../hooks/useGetRest.js';
import { useState } from 'react';
import { Categorias, NomeApp, Buscador, TelaHome } from './styled.js';
import Footer from '../../Components/Footer.js';
import { goToRestaurant } from '../../Routes/coordinator.js';
import { useNavigate } from 'react-router-dom'


const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;



const HomePage = () => {

  const [infoRestaurante] = useGetRest(`${BASE_URL}/restaurants`);
  const [busca, setBusca] = useState('');
  const [select, setSelect] = useState('');

  const navigate = useNavigate();
  // const {id} = useParams()
  //console.log(infoRestaurante);

  //filtrando por categoria
  const restauranteCategoria = infoRestaurante.filter((item) =>
    item.category.toLowerCase().includes(select.toLocaleLowerCase()),
  );
  //filtrando por restaurante
  const restauranteFiltrado = restauranteCategoria.filter((i) =>
    i.name.toLowerCase().includes(busca.toLocaleLowerCase()),
  );

  return (
    <TelaHome>
      <NomeApp>Rappi4</NomeApp>
      <Buscador value={busca} onChange={(e) => setBusca(e.target.value)} />
      <Categorias value={select} onChange={(e) => setSelect(e.target.value)}>
        {infoRestaurante.map((info) => (
          <li>{info.category}</li>
        ))}
      </Categorias>
      

      {restauranteFiltrado.map((item) => (
        <CardRestaurant
          onClick={() => goToRestaurant(navigate(item.id)) }
          key={item.id}
          id={item.id}
          logoUrl={item.logoUrl}
          name={item.name}
          shipping={item.shipping}
          deliveryTime={item.deliveryTime}
        />
      ))}
      <Footer />
    </TelaHome>
  )
}

export default HomePage
