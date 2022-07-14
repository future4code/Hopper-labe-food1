import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')}>Logout</button>

      <button onClick={() => navigate('/home')}>Voltar pra Home</button>
    </div>
  )
}

export default ProfilePage
