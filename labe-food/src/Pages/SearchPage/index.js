import React from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search.js'
import { goToHome, goToLoginPage } from '../../Routes/coordinator.js'

const SearchPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <Search />
      <br />
      <button onClick={() => goToHome(navigate)}>Home</button>
      <button onClick={() => goToLoginPage(navigate)}>Voltar Login</button>
      <br />
      <h3>Busque por nome de Restaurante</h3>
    </div>
  )
}

export default SearchPage
