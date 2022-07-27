import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from './../../hooks/useForm'
import { login } from '../../services/user'
import { goToSignUp } from '../../Routes/coordinator'
import { PageContainer, LogoImage, FormContainer } from './styled'
import Logo from '../../assets/logo-laranja.svg'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import { CircularProgress } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'




const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({
    email: '',
    password: '',

  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }


  const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, navigate, setIsLoading, clear)
  }

  return (
    <PageContainer>
      <LogoImage src={Logo} />
      <Typography variant="h5" align="center">
        Entrar
      </Typography>

      <FormContainer onSubmit={onSubmitLogin}>
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
          
          color={"primary"}
       
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
        </Button>

      </FormContainer>
      <Button
        onClick={() => goToSignUp(navigate)}
        fullWidth
        margin={'normal'}

      >
        Não possui cadastro? clique aqui.
      </Button>
    </PageContainer>
  )
}

export default LoginPage
