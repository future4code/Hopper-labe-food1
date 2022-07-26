import React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const Footer = () => {
  return (
    <>
      <Box sx={{position:'fixed', bottom:'0', width:'100%'}}>

        <BottomNavigation>

          <BottomNavigationAction label="Recents" icon={<HomeIcon />} />

          <BottomNavigationAction
            label="Favorites"
            icon={<ShoppingCartOutlinedIcon />}
          />

          <BottomNavigationAction label="Nearby" icon={<PersonOutlineIcon />} />
          
        </BottomNavigation>
      </Box>
    </>
  )
}

export default Footer
