import Typography from '@mui/material/Typography'
import React from 'react'

const CardOrderHistory = props => {
  const dateConverter = date => {
    let dateNowConverter = new Date(date)
    return dateNowConverter.toString().substr(4, 11);
  }

  const historyMap = props.orderHistory.map(order => {
    return (
      <div key={order.createdAt}>
        <Typography variant={'body1'} color={'primary'}>
          {order.restaurantName}
        </Typography>
        <Typography variant={'body2'}>
          {dateConverter(order.createdAt)}
        </Typography>
        <Typography variant={'h6'}>
          SUBTOTAL R$ {order.totalPrice.toFixed(2).replace('.', ',')}
        </Typography>
      </div>
    )
  })

  return historyMap
}

export default CardOrderHistory
