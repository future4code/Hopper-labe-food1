import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddressPage from '../Pages/AddressPage'
import CarrinhoPage from '../Pages/CarrinhoPage'
import HomePage from '../Pages/HomePage/'
import LoginPage from '../Pages/LoginPage'
import ProfilePage from '../Pages/ProfilePage'
import RestaurantsDetailsPage from '../Pages/RestaurantsDetailsPage'
import SignUpPage from '../Pages/SignUpPage'
import SearchPage from '../Pages/SearchPage'
import EditProfilePage from './../Pages/EditProfilePage/index';
import EditAddressPage from './../Pages/EditAddressPage/index';
import SplashPage from '../Pages/SplashPage'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<SplashPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/cadastro-usuario'} element={<SignUpPage />} />
        <Route path={'/cadastro-endereco'} element={<AddressPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/busca'} element={<SearchPage />} />
        <Route
          path={'/restaurante/:name'}
          element={<RestaurantsDetailsPage />}
        />
        <Route path={'/carrinho'} element={<CarrinhoPage />} />
        <Route path={'/perfil'} element={<ProfilePage />} />
        <Route path={'/editar-perfil'} element= {<EditProfilePage/>}/>
        <Route path={'/editar-endereco'} element= {<EditAddressPage/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default Router
