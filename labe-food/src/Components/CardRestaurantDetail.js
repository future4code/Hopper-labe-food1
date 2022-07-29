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
  width: 70%;
`

const CardRestaurantDetail = (props) => {
  return (
    <Card  sx={{ width: "95%", border:"1px solid LightGrey", margin:"4px", borderRadius:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.logoUrl}
          alt="Imagem Restaurante"
        />

        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={'primary'}
          >
            {props.name}
          </Typography>

          <Typography variant="body1" color={'neutralColor'}>
            {props.category}
          </Typography>

          <StyledAlign>
            <Typography variant="body1" color={'neutralColor'}>
            {props.deliveryTime} - {props.deliveryTime - 10} min
            </Typography>
            <Typography variant="body1" color={'neutralColor'}>
              Frete R$:{props.shipping},00
            </Typography>
          </StyledAlign>

          <Typography variant="body1" color={'neutralColor'}>
            {props.address}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardRestaurantDetail
