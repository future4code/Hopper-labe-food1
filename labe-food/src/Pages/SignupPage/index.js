import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SignUpPageContainer, InputsContainer } from './styled'
import { goToLoginPage } from './../../Routes/coordinator'
import useForm from './../../hooks/useForm'
import { signUp } from '../../services/user'
import {Button, OutlinedInput, IconButton, InputAdornment, FormControl, Typography, InputLabel, TextField, CircularProgress} from '@mui/material/'
import {Visibility, VisibilityOff } from '@mui/icons-material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FlexForm } from './styled'
import Logo from '../../assets/logo-laranja.svg'
import { LogoImage, PageContainer } from '../LoginPage/styled'

const SignUpPage = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [confirm, setConfirm] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleClickShowConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleMouseDownConfirm = (event) => {
    event.preventDefault()
  }
  const onSubmitForm = event => {
    event.preventDefault()
    if (form.password !== confirm) {
      alert('As senhas não coincidem')
    } else {
      signUp(form, navigate, setIsLoading, clear)
    }
  }

  const handleConfirm = event => {
    setConfirm(event.target.value)
  }

  return (
    <PageContainer>
      <p onClick={() => goToLoginPage(navigate)}>
        <ArrowBackIosIcon fontSize="large" />
      </p>
      <LogoImage src={Logo} />
      <Typography variant="h5" align="center">Cadastrar</Typography>
        

      <FlexForm onSubmit={onSubmitForm}>
        <TextField
          value={form.name}
          name={'name'}
          onChange={onChange}
          required
          label="Nome"
          placeholder="Nome e sobrenome"
          type="text"
          variant="outlined"


        />
        <TextField
          name={'email'}
          value={form.email}
          onChange={onChange}
          required
          label="E-mail"
          type="email"
          variant="outlined"
          placeholder="email@email.com"

        />
        <TextField
          inputProps={{
            maxLength: 14,
            pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`,
          }}
          name={'cpf'}
          value={form.cpf}
          onChange={onChange}
          required
          label="CPF"
          placeholder="000.000.000-00"
          variant="outlined"
          type="text"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={onChange}
            id="outlined-adornment-password"
            required
            placeholder="Mínimo 6 caracteres"
            label="Senha"
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
        <FormControl variant="outlined">

          <InputLabel htmlFor="outlined-confirm-password">Confirmar Senha</InputLabel>
          <OutlinedInput
          inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            name="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={form.confirm}
            onChange={handleConfirm}
            required
            id="outlined-confirm-password"
            label="Confirme"
            placeholder="Confirme a Senha Anterior"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownConfirm}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }


          />
        </FormControl>

        <Button
          variant="contained"
          type={'submit'}
          fullWidth
          color={'primary'}
          margin={'normal'}
        >
          {isLoading ? (
            <CircularProgress color={'inherit'} size={24} />
          ) : (
            <>Criar</>
          )}
        </Button>
      </FlexForm>
    
    </PageContainer>
  )
}

export default SignUpPage
