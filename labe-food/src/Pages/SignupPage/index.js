import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/cadastro-endereco')}>Enviar</button>
    </div>
  )
}

export default SignupPage
