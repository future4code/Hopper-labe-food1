import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddressPage from '../Pages/AddressPage'
import CarrinhoPage from '../Pages/CarrinhoPage'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import ProfilePage from '../Pages/ProfilePage'
import RestaurantsDetailsPage from '../Pages/RestaurantsDetailsPage'
import SignupPage from '../Pages/SignupPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/cadastro-usuario'} element={<SignupPage />} />
        <Route path={'/cadastro-endereco'} element={<AddressPage />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route
          path={'/restaurante'}
          element={<RestaurantsDetailsPage />}
        />
        <Route path={'/carrinho'} element={<CarrinhoPage />} />
        <Route path={'/perfil'} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
