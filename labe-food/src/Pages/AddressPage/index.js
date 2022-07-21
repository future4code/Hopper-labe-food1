import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { LoginBox } from "./styled";
import { goToSignUp } from "../../Routes/coordinator";
// import Logo from "../../assets/logo-laranja.svg";

const AddressPage = () => {
  const navigate = useNavigate();
  return (
    <LoginBox>
      <p onClick={() => goToSignUp (navigate)}><ArrowBackIosIcon fontSize="large"/></p>
      <p>Meu Endereço</p>
      <div>
        <TextField
          fullWidth
          margin={"normal"}
          required
          id="endereco"
          placeholder="Rua/Av."
          label="Logradouro"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="numero"
          label="Número"
          placeholder="Número"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="complemento"
          label="Complemento"
          placeholder="Apto./Bloco"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="bairro"
          label="Bairro"
          placeholder="Bairro"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="cidade"
          label="Cidade"
          placeholder="Cidade"
          // (InputLabelProps)Abaixo para deixar label fixo
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="estado"
          label="Estado"
          placeholder="Estado"
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
          margin={"normal"}
          onSubmit={() => navigate("/cadastro-endereco")}
        >
          Salvar
        </Button>
      </div>
    </LoginBox>
  );
};

export default AddressPage;
