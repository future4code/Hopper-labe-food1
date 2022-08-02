import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'

import { GlobalStateContext } from '../global/GlobalStateContatex'
import { useContext } from 'react'

import {
  BotaoAdd,
  BotaoQtd,
  BoxNomeQtd
} from '../Pages/RestaurantsDetailsPage/styled'

const CardProduct = props => {
  const { states, setters } = useContext(GlobalStateContext)
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

  const addMoreProduct = product => {
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
  }

  // Função remover um produto do carrinho
  const removeMoreProduct = product => {
    const newCart = states.cart
      .map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1
          }
        } else {
          return cartProduct
        }
      })

      .filter(cartProduct => {
        if (cartProduct.quantity < 1) {
          return false
        } else {
          return true
        }
      })

    setters.setCart(newCart)
  }

  return (
    <Card
      sx={{
        display: 'flex',
        minWidth: '95%',
        border: '1px solid LightGrey',
        margin: '4px',
        borderRadius: '10px',
        height: '150px'
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 97 }}
        src={props.photoUrl}
        alt="Live from space album cover"
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          borderRadius: '0 10px 10px 0'
        }}
      >
        <BoxNomeQtd>
          <Typography
            component="div"
            variant="h6"
            color={'primary'}
            sx={{ paddingLeft: '15px' }}
          >
            {props.name}
          </Typography>

          <BotaoQtd onClick={() => addMoreProduct(props.product.quantity)}>
            +
          </BotaoQtd>
          <p>0</p>
          <BotaoQtd onClick={() => addMoreProduct(props.product.quantity)}>
            -
          </BotaoQtd>
        </BoxNomeQtd>

        <div>
          <Typography
            variant="body1"
            color={'neutralColor'}
            sx={{ paddingLeft: '15px' }}
          >
            {props.description}
          </Typography>
        </div>

        <BoxNomeQtd>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ paddingLeft: '15px' }}
          >
            R$:{props.price.toFixed(2).replace('.', ',')}
          </Typography>

          {props.product ? (
            <BotaoAdd
              key={props.id}
              onClick={() =>
                addProduct(props.product, props.restaurant, props.id)
              }
            >
              adicionar
            </BotaoAdd>
          ) : null}
        </BoxNomeQtd>
      </Box>
    </Card>
  )
}

export default CardProduct
