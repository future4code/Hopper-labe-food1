import { Typography } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { StyleDetail, StyledAddress } from './styled'
import CircularProgress from '@mui/material/CircularProgress'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { getFullAddress} from './../../services/user';
import { goToEditProfile } from '../../Routes/coordinator'
import { goToEditAddress } from '../../Routes/coordinator'
import { getProfile } from '../../services/profile'
import { GlobalStateContext } from './../../global/GlobalStateContatex';
import { PageContainer } from '../LoginPage/styled'
import { goToLoginPage } from '../../Routes/coordinator'
import useProtectedPage from './../../hooks/useProtectedPage';
import { getOrdersHistory } from '../../services/ordersHistory'


 const ProfilePage = () => {
  useProtectedPage();
  const navigate = useNavigate()
  const {states, setters} = useContext(GlobalStateContext)
  const profile = states.profile
  const address = states.address
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
    getProfile(setters.setProfile, setIsLoading);
    getFullAddress(setters.setAddress, setIsLoading)
    getOrdersHistory(setters.setOrdersHistory)
  }, [])

  const onClickLogout = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }


  //Feito agora
  const mapHistory = states.orderHistory.map((ord) => {
    return(
    <div key={ord.creatdAt}>
      <h2>{ord.restaurantName}</h2>
      data
      <h2>SUBTOTAL R$ {ord.totalPrice.toFixed(2).replace('.', ',')}</h2>
    </div>

    )})


  return (
    <PageContainer>

      <button onClick={() => onClickLogout(navigate)}>Logout</button>

      <button onClick={() => navigate('/home')}>Voltar pra Home</button>

      {isLoading && address ? (
        <CircularProgress />
      ) : (
          <div>
        <StyleDetail>
          <div>
            <Typography variant={"body1"}>{profile.name}</Typography>
            <Typography variant={"body1"}>{profile.email}</Typography>
            <Typography variant={"body1"}>{profile.cpf}</Typography>
          </div>
          <p onClick={() => goToEditProfile(navigate)}>
            <ModeOutlinedIcon fontSize='medium'/>
          </p>
        </StyleDetail>
           <StyledAddress>
          <div>
            <Typography variant={'body1'}>Endereço cadastrado</Typography>
            <Typography variant={'body1'}>{address.street}, {address.number}, {address.complement}, {address.neighbourhood}</Typography>
          </div>
          <p onClick={()=> goToEditAddress(navigate)}><ModeOutlinedIcon/></p>
          </StyledAddress>

         </div>
      )}

      <h3>Histórico de pedidos</h3>

  {/* // feito agora */}
      {mapHistory}


      <Footer />
    </PageContainer>
  )
}


export default ProfilePage