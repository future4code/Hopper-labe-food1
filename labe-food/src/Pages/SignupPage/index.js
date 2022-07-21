import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LoginBox } from "./styled";
import Logo from "../../assets/logo-laranja.svg";

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <LoginBox>
      <p onClick={() => navigate("/")}>←</p>
      <img src={Logo} alt="Logo" />
      <p>Entrar</p>
      <div>
        <TextField
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
        <TextField
          fullWidth
          autoFocus
          margin={"normal"}
          required
          id="senha"
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          type="password"
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
          id="confirm"
          label="Confirme"
          placeholder="Confirme a Senha Anterior"
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
          margin={"normal"}
          onSubmit={() => navigate("/cadastro-endereco")}
        >
          Criar
        </Button>
      </div>
    </LoginBox>
  );
};

export default SignupPage;
