import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'
import {
  BotaoAdd,
  BotaoQtd,
  BoxNomeQtd
} from '../Pages/RestaurantsDetailsPage/styled'

const CardProduct = (props) => {
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
        // image="https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"
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

          <BotaoQtd>2</BotaoQtd>
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

          <BotaoAdd
          
            key={props.id} 
          >adicionar</BotaoAdd>
        </BoxNomeQtd>
      </Box>
    </Card>
  )
}

export default CardProduct
