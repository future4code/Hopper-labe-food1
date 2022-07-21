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
    <Card sx={{ maxWidth: 345 }}>
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
            Hamburgueria
          </Typography>
          <StyledAlign>
            <Typography variant="body2" color="text.secondary">
              40 - 60 min
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frete R$ 18,00
            </Typography>
          </StyledAlign>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardRestaurant
