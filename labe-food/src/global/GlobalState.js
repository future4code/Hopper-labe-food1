import { InsertEmoticon } from '@mui/icons-material'
import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContatex'


const GlobalState = props => {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantDetail, setRestaurantDetail] = useState({})
  const [currentCategory, setCurrentCategory] = useState('')
  const [profile, setProfile] = useState({})
  const [address, setAddress] = useState({})
  const [activeOrder, setActiveOrder] = useState({})
  const [orderHistory, setOrderHistory] = useState([])
  
  const [cart, setCart] = useState([])
  const [infoRestaurant, setInfoRestaurant] = useState({})
  const [subTotal, setSubtotal] = useState(0)

  const addProduct = (product, restaurant, quantidade) => {
    const newProduct = {...product, quantity:quantidade}
    const newCart = [...cart, newProduct]
    setCart(newCart)

    const newInfoRestaurant = restaurant
    setInfoRestaurant(newInfoRestaurant)

    const newSubTotal = subTotal + (product.price*quantidade)
    setSubtotal(newSubTotal)
  }

  const removeProduct = (product) => {
    const newCart = cart.filter((item) =>{
      return InsertEmoticon.id !== product.id
    })
    setCart(newCart)

    const newSubTotal = subTotal - (product.price*product.quantity)
    setSubtotal(newSubTotal)
  }

  const functions = {addProduct, removeProduct}

  const states = {
    restaurants,
    restaurantDetail,
    currentCategory,
    profile,
    address,
    activeOrder,
    orderHistory,
    cart,
    subTotal,
    infoRestaurant
  }

  const setters = {
    setRestaurants,
    setRestaurantDetail,
    setCurrentCategory,
    setProfile,
    setAddress,
    setActiveOrder,
    setOrderHistory,
    setCart,
    setSubtotal,
    setInfoRestaurant
  }

  return (
    <GlobalStateContext.Provider value={{ setters, states, functions }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
