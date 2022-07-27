import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {TextField, Button, Typography, CircularProgress} from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PageContainer, LogoImage } from "../LoginPage/styled";
import { goToSignUp } from "../../Routes/coordinator";
import useForm from './../../hooks/useForm';
import { createAddAdress } from './../../services/user';
import Logo from '../../assets/logo-laranja.svg'
import { FormContainer } from './styled'

const AddressPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] =useForm({street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});
  
  const onSubmitForm = (event) => {
    event.preventDefault(
      createAddAdress(form, navigate, setIsLoading, clear )
    )
  }


  return (
    <PageContainer>
    <p onClick={() => goToSignUp(navigate)}>
        <ArrowBackIosIcon fontSize="large" />
      </p>
      <LogoImage src={Logo} />
      <Typography variant="h5" align="center">Meu endereço</Typography>
      
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
         type="text"
         fullWidth
         name={"street"}
         value={form.street}
         onChange={onChange}
         required
         label="Logradouro"
         placeholder="Rua/Av."
         variant="outlined"
        />
        <TextField
          fullWidth
          type=""
          name={"number"}
          value={form.number}
          onChange={onChange}
          required
          label="Número"
          placeholder="Número"
          variant="outlined"
        />
        <TextField
          fullWidth
          type=""
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          label="Complemento"
          placeholder="Apto./Bloco"
          variant="outlined"
        />
        <TextField
          fullWidth
          type="text"
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            required
            label="Bairro"
            placeholder="Bairro"
            variant="outlined"
        />
        <TextField
          fullWidth
          type="text"
            name={"city"}
            value={form.city}
            onChange={onChange}
            required
            label="Cidade"
            placeholder="Cidade"
            variant="outlined"
        />
        <TextField
          fullWidth
          type="text"
          name={"state"}
          value={form.state}
          onChange={onChange}
          required
          label="Estado"
          placeholder="Estado"
          variant="outlined"
        />
      
      
        <Button
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}
          margin={"normal"}
          >   {isLoading ? (
            <CircularProgress color={'inherit'} size={24} />
          ) : (
            <>Salvar</>
          )}
          
        </Button>
        </FormContainer>
    </PageContainer>
  );
};

export default AddressPage;
