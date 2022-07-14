import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/restaurante')}>Restaurante</button>
      <button onClick={() => navigate('/')}>Voltar Login</button>
    </div>
  )
}

export default HomePage
