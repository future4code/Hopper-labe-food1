import React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

import { useNavigate } from 'react-router-dom'
import { goToHome, goToCarrinho, goToProfile } from '../Routes/coordinator'

const Footer = () => {
  const navigate = useNavigate()

  return (
      <Box sx={{position:'fixed', bottom:'0', width:'100%'}}>

        <BottomNavigation>

          <BottomNavigationAction
          label="Recents"
          icon={<HomeIcon />}
          onClick={() => goToHome(navigate)}
          />

          <BottomNavigationAction
            label="Favorites"
            icon={<ShoppingCartOutlinedIcon />}
            onClick={() => goToCarrinho(navigate)}
          />

          <BottomNavigationAction
          label="Nearby"
          icon={<PersonOutlineIcon />}
          onClick={() => goToProfile(navigate)}
          />
          
        </BottomNavigation>
      </Box>
  )
}

export default Footer
