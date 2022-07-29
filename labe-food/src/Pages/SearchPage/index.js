import styled from 'styled-components';
import { BASE_URL } from '../../constants/url.js';
import CardRestaurant from '../../Components/CardRestaurant.js';
import { useGetRest } from '../../hooks/useGetRest.js';
import { useState } from 'react';
import { Categorias, NomeApp, Buscador } from './styled.js';
import Footer from '../../Components/Footer.js';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SearchPage = () => {
  const [infoRestaurante] = useGetRest(`${BASE_URL}/restaurants`);
  const [busca, setBusca] = useState('');
  const [select, setSelect] = useState('');

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
    <StyledBox>
      <NomeApp>Rappi4</NomeApp>
      <Buscador value={busca} onChange={(e) => setBusca(e.target.value)} />
      <Categorias value={select} onChange={(e) => setSelect(e.target.value)}>
        <li>Categoria</li>
        {infoRestaurante.map((info) => (
          <li>{info.category}</li>
        ))}
      </Categorias>
      

      {restauranteFiltrado.map((item) => (
        <CardRestaurant
          key={item.id}
          id={item.id}
          logoUrl={item.logoUrl}
          name={item.name}
          shipping={item.shipping}
          deliveryTime={item.deliveryTime}
        />
      ))}
      <Footer />
    </StyledBox>
  );
};
export default SearchPage;
