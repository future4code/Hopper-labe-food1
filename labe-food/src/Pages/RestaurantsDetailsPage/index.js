import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
import CardRestaurantDetail from '../../Components/CardRestaurantDetail'
import { useGetRest } from '../../hooks/useGetRest'
import { TelaRestaurante, NomeCategoria, HeaderResDetail } from './styled'
import { BASE_URL } from '../../constants/url'
import { Typography } from '@mui/material'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useRestaurantsDetail } from '../../services/restaurantsDetail'


const RestaurantsDetailsPage = (props) => {
  // const navigate = useNavigate();
  const {id} = useParams();
  const [infoRestauranteId] = useRestaurantsDetail("2");
  console.log(infoRestauranteId)
  // console.log(menu)

  // abioxo lógica para pegar informações dos pratos.
  const typeProducts =infoRestauranteId.products && infoRestauranteId.products.map(food => {
    return food
  }).reduce((acc, food) => {
    if (!acc[food.category]) {
      acc[food.category] = []
    }
    acc[food.category].push(food)
    return acc
  }, [])

  // {typeProducts && Object.entries(typeProducts).map((type, i) => (
  //   <div key={i}>
  //     <Title>{type[0]}</Title>
  //     {type[1].map(products => (
  //       <Products key={products.id}>
  //         <Image>
  //           <img src={products.photoUrl} alt={Imagem ilustrativa do ${products.name}} />
  //         </Image>
  //         <Texts>
  //           <Item>
  //             <p>{products.name}</p>
  //             <button>2</button>
  //           </Item>
  //           <p>{products.description}</p>
  //           <CardShopping 
  //             products={products}
  //             restaurant={data.restaurant}
  //           />
  //         </Texts>
  //       </Products>
  //     ))}
  //   </div>
  // ))}

  console.log(typeProducts)

  return (
    <div>
      <Header />
      <TelaRestaurante>
            <CardRestaurantDetail
              logoUrl={infoRestauranteId.logoUrl}
              name={infoRestauranteId.name}
              shipping={infoRestauranteId.shipping}
              deliveryTime={infoRestauranteId.deliveryTime}
              address={infoRestauranteId.address}
              category={infoRestauranteId.category}
            />


            {typeProducts && Object.entries(typeProducts).map((type, i) => (               
              <div key={i}>
                  <NomeCategoria>{type[0]}</NomeCategoria> 
                    {type[1].map(products => (
                      <CardProduct 
                      
                        photoUrl={products.photoUrl}
                        key={products.id}
                        src={products.photoUrl}
                        name={products.name}
                        description={products.description}
                        price={products.price}
                      />
                      ))}
              </div>
            ))}

      </TelaRestaurante>
      <Footer />
    </div>
  )
}

export default RestaurantsDetailsPage
