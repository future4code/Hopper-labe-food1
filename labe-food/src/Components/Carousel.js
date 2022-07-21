import React from 'react'
import Box from '@mui/joy/Box'

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
        '::-webkit-scrollbar-thumb': { display: 'none' }
      }}
    >
      <p>hamburgueria</p> <p>hamburgueria</p>
      <p>hamburgueria</p> <p>hamburgueria</p>
      <p>hamburgueria</p> <p>hamburgueria</p>
    </Box>
  )
}

export default Carousel
