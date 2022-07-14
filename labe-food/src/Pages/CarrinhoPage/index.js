import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarrinhoPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/perfil')}>Ver Perfil</button>
      <button onClick={() => navigate('/restaurante')}>
        Continuar Comprando
      </button>
      <button onClick={() => navigate('/home')}>Compra realizada</button>
    </div>
  )
}

export default CarrinhoPage
