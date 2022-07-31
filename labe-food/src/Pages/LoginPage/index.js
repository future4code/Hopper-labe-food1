import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from './../../hooks/useForm'
import { login } from '../../services/user'
import { goToHome, goToSignUp } from '../../Routes/coordinator'
import { PageContainer, LogoImage, FormContainer } from './styled'
import Logo from '../../assets/logo-laranja.svg'
import { TextField, Button, Typography, OutlinedInput, FormControl, InputLabel, CircularProgress, InputAdornment, IconButton } from '@mui/material/'
import { Visibility, VisibilityOff } from '@mui/icons-material/'
import useUnProtectedPage from './../../hooks/useUnProtectedPage';
import SplashPage from '../SplashPage/index'







const LoginPage = () => {
  useUnProtectedPage();
  const [screen, setScreen] = useState()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',

  })


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }


  const submitLogin = (e) => {
    e.preventDefault()
    login(form, navigate, setIsLoading, clear)
  }

  return (
    <PageContainer>
{screen && <SplashPage setScreen={setScreen}/>}
      <LogoImage src={Logo} />
      <Typography variant="h5" align="center">
        Entrar
      </Typography>

      <FormContainer onSubmit={submitLogin}>
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          label="Email"
          placeholder="email@email.com"
          required
          variant="outlined"

        />
        <FormControl variant="outlined">
          <InputLabel required>Senha</InputLabel>
          <OutlinedInput
            id={"password"}
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={onChange}
            required
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }

          />
        </FormControl>


        <Button
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}

          margin={"normal"}
        >   {isLoading ? (
          <CircularProgress color={'inherit'} size={24} />
        ) : (
          <>Entrar</>
        )}

        </Button>

      </FormContainer>
      <Button
        onClick={() => goToSignUp(navigate)}
        fullWidth



      >
        Não possui cadastro? clique aqui.
      </Button>
    </PageContainer>
  )
}

export default LoginPage
