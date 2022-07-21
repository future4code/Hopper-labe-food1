import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { LoginBox } from './styled'
import Button from '@mui/material/Button';
import Logo from '../../assets/logo-laranja.svg'
import { goToSignUp } from '../../Routes/coordinator';
import useForm from './../../hooks/useForm';
import { login } from '../../services/user';
import { CircularProgress } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChange, clear, setForm] = useForm({  email: '',
  password: '',
  showPassword: false,})
  const [isLoading, setIsLoading] = useState(false)
  
  

const onSubmitForm = (event) =>{
  event.preventDefault()
  login(form, navigate, setIsLoading, clear)
}

  return (
    <LoginBox>
      <img src={Logo} alt="Logo" />
      <p>Entrar</p>
     
      <form onSubmit={onSubmitForm}>
        <TextField
        name={"email"}
        value={form.email}
        onChange={onChange}
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
         name={"password"}
         value={form.password}
         onChange={onChange}
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

     
        <Button
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}
        </Button>
      </form>
      
      <Button 
        onClick={() => goToSignUp(navigate)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        margin={"normal"}
      >
        Não possui cadastro? cadastre-se
      </Button>
    </LoginBox>
  )
}

export default LoginPage
