import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddressPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/home')}>Login</button>
    </div>
  )
}

export default AddressPage
