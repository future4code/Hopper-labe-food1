import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/cadastro-usuario')}>
        Cadastro de Usuário
      </button>
      <button onClick={() => navigate('/home')}>Login</button>
    </div>
  )
}

export default LoginPage
