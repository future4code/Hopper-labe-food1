import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginBox } from './styled'

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <LoginBox>
            <p>Entrar</p>
      <div>
      <TextField
        fullWidth
        autoFocus
        margin={'normal'}
        required
        id="outlined-required"
        label="E-mail"
        placeholder="email@email.com"
      />
      <TextField
        fullWidth
        autoFocus
        margin={'normal'}
        required
        id="outlined-disabled"
        label="Senha"
        placeholder="Senha"
        type="password"
      />
      </div>

      <Button
        variant="contained"
        type={"submit"}
        fullWidth
        color={"primary"}
        margin={'normal'}
      >
        Entrar
      </Button>
      <button onClick={() => navigate('/')}>Logout</button>

      <button onClick={() => navigate('/home')}>Voltar pra Home</button>
    </LoginBox>
  )
}

export default ProfilePage
