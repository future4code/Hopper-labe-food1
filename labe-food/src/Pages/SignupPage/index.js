import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import { SignUpPageContainer, InputsContainer } from "./styled";
import Logo from "../../assets/logo-laranja.svg";
import {  goToLoginPage } from './../../Routes/coordinator';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useForm from './../../hooks/useForm';
import { signUp } from "../../services/user";



const SignUpPage = () => {
  
  const navigate = useNavigate();
  const [form, setForm, onChange, clear] =useForm({ name: "",
  email: "",
  cpf: "",
  password: "",
  showPassword: false,
  showConfirm: false,}) 
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
//ocultar senha e confirmação de senha e prevenir comportamento padrão seguindo o mui-material//
  const handleClickShowPassword = () => {
setForm({...form, showPassword: !form.showPassword})
  }

  const handleMouseDownPassword = (event) =>{
    event.preventDefault();
  }

  const handleClickShowConfirm  = () => {
    setForm({...form, showConfirm: !form.showConfirm})
  }

  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  }
 const onSubmitForm = (event) => {
  event.preventDefault();
  if (form.password !== confirm){
    alert("As senhas não coincidem");

  }else {
    signUp(form, navigate, setIsLoading, clear)
  }
 }

 const handleConfirm = (event) => {
  setConfirm(event.target.value);
};

  return (
        <form onSubmit={onSubmitForm}>
    <SignUpPageContainer>
      <p onClick={() => goToLoginPage(navigate)}><ArrowBackIosIcon fontSize="large"/></p>
      <img src={Logo} alt="Logo" />
      <p>Entrar</p>
     
      <InputsContainer>
        <TextField
         value={form.name}
         name={'name'}
         onChange={onChange}
          fullWidth
          margin={"normal"}
          required
          id="nome"
          placeholder="Nome e Sobrenome"
          label="Nome"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={form.email}
          name={'email'}
          onChange={onChange}
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="email"
          label="Email"
          placeholder="email@email.com"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
         name={"cpf"}
         value={form.cpf}
         onChange={onChange}
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="number"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel>Senha*</InputLabel>
        <OutlinedInput
         name="password"
         type={form.showPassword ? "text" : "password"}
         value={form.password}
         onChange={onChange}
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="senha"
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
                {form.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          // (InputLabelProps)Abaixo para deixar label fixo
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        
        <InputLabel>Confirmar*</InputLabel>
        <OutlinedInput
           name="confirm-password"
           type={form.showConfirm ? "text" : "password"}
           value={form.confirm}
           onChange={handleConfirm}
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="confirm"
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
                {form.showConfirm ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          
          // (InputLabelProps)Abaixo para deixar label fixo
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
      </InputsContainer>
    
        <Button
          
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}
          margin={"normal"}
        >
           {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar</>}
        </Button>
     
    </SignUpPageContainer>
    </form>
  );
};

export default SignUpPage