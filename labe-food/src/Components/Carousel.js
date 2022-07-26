import React from 'react'
import Box from '@mui/joy/Box'
import {Categorias} from '../Pages/HomePage/styled'

const Carousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center'
        },
        '::-webkit-scrollbar': { display: 'none' }
      }}
    >
      <Categorias>
        Hamburgueria
      </Categorias>

      <p>hamburgueria</p>
      <p>hamburgueria</p> <p>hamburgueria</p>
      <p>hamburgueria</p> <p>hamburgueria</p>
    </Box>
  )
}

export default Carousel
