import React from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
import CardRestaurantDetail from '../../Components/CardRestaurantDetail'
import { TelaRestaurante, NomeCategoria } from './styled'
import useProtectedPage from './../../hooks/useProtectedPage'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useRestaurantsDetail } from '../../services/restaurantsDetail'
import { GlobalStateContext } from './../../global/GlobalStateContatex'
import { useContext } from 'react'

const RestaurantsDetailsPage = () => {
  useProtectedPage()
  const { id } = useParams()
  const [infoRestauranteId] = useRestaurantsDetail(id)
  const { states, setters } = useContext(GlobalStateContext)

  const typeProducts =
    infoRestauranteId.products &&
    infoRestauranteId.products
      .map(food => {
        return food
      })
      .reduce((acc, food) => {
        if (!acc[food.category]) {
          acc[food.category] = []
        }
        acc[food.category].push(food)
        return acc
      }, [])

  // Função Adicionar produto ao carrinho
  const addProduct = (product, restaurantId) => {
    const index = states.cart.findIndex(cartProduct => {
      if (cartProduct.id === product.id) {
        return true
      } else {
        return false
      }
    })

    if (index === -1) {
      const setProduct = {
        ...product,
        quantity: 1
      }
      const newCart = [...states.cart, setProduct]
      setters.setCart(newCart)
      // Setando alert na tela
      alert('Produto adicionado ao carrinho')
    } else {
      const newCart = states.cart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1
          }
        } else {
          return cartProduct
        }
      })
      setters.setCart(newCart)
      alert('Produto adicionado ao carrinho')
    }

    localStorage.setItem('restaurantId', restaurantId)
  }

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

        {typeProducts &&
          Object.entries(typeProducts).map((type, i) => (
            <div key={i}>
              <NomeCategoria>{type[0]}</NomeCategoria>
              {type[1].map(products => (
                <CardProduct
                  restaurant={infoRestauranteId}
                  product={products}
                  addProduct={addProduct}
                  quantity={products.quantity}
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
