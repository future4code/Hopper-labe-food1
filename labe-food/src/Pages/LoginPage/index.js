import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { LoginBox } from './styled'
import Button from '@mui/material/Button';
import Logo from '../../assets/logo-laranja.svg'


const LoginPage = () => {
  const navigate = useNavigate()
  return (

    <LoginBox>
      <img src={Logo} alt="Logo" />
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
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
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
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}
          margin={'normal'}
        >
          Entrar
        </Button>
      </div>
      <Button type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        margin={"normal"}
        onClick={() => navigate('/')}
      >
        Não possui cadastro? cadastre-se
      </Button>
    </LoginBox>
  )
}

export default LoginPage
