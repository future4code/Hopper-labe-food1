import styled from 'styled-components';
import { BASE_URL } from '../../constants/url.js';
import CardRestaurant from '../../Components/CardRestaurant.js';
import { useGetRest } from '../../hooks/useGetRest.js';
import { useState } from 'react';

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
      <input value={busca} onChange={(e) => setBusca(e.target.value)} />
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option>Categoria</option>
        {infoRestaurante.map((info) => (
          <option>{info.category}</option>
        ))}
      </select>

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
    </StyledBox>
  );
};
export default SearchPage;
