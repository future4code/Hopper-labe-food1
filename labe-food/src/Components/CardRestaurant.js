import React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const StyledAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CardRestaurant = () => {
  return (
    <Card sx={{ width: "95%", border:"1px solid LightGrey", margin:"4px" }}>

      <CardActionArea>

        <CardMedia
          component="img"
          height="140"
          image="https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"
          alt="hamburguer"
        />

        <CardContent>

          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={'primary'}
          >
            NOME RESTAURANTE
          </Typography>

          <StyledAlign>

            <Typography variant="h6" color={'neutralColor'}>
              40 - 60 min
            </Typography>

            <Typography variant="h6" color={'neutralColor'}>
              Frete R$ 18,00
            </Typography>

          </StyledAlign>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardRestaurant
