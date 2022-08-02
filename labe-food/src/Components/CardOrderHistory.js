import Typography from '@mui/material/Typography'
import React from 'react'
import { BoxHistory } from '../Pages/ProfilePage/styled'

const CardOrderHistory = props => {
  const dateConverter = date => {
    let dateNowConverter = new Date(date)
    return dateNowConverter.toString().substr(4, 11);
  }

  const historyMap = props.orderHistory.map(order => {
    return (
      <BoxHistory key={order.createdAt}>
        <Typography variant={'h6'} color={'primary'} sx={{margin:'3px 0'}}>
          {order.restaurantName}
        </Typography>
        <Typography variant={'body2'} sx={{margin:'3px 0'}}>
          {dateConverter(order.createdAt)}
        </Typography>
        <Typography variant={'h6'} sx={{margin:'3px 0', fontWeight:'bold'}}>
          SUBTOTAL R$ {order.totalPrice.toFixed(2).replace('.', ',')}
        </Typography>
      </BoxHistory>
    )
  })

  return historyMap
}

export default CardOrderHistory
