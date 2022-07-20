import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginBox } from './styled'
import Logo from '../../assets/logo-laranja.svg'

const AddressPage = () => {
  const navigate = useNavigate()
  return (
    <LoginBox>
      <p onClick={() => navigate('/')}>←</p>
      <p>Meu Endereço</p>
      <div>
        <TextField
          fullWidth
          margin={'normal'}
          required
          id="endereco"
          placeholder="Rua/Av."
          label="Logradouro"
        />
        <TextField
          fullWidth
          autoFocus
          margin={'normal'}
          required
          id="numero"
          label="Número"
          placeholder="Número"
        />
        <TextField
          fullWidth
          autoFocus
          margin={'normal'}
          required
          id="complemento"
          label="Complemento"
          placeholder="Apto./Bloco"
        />
        <TextField
          fullWidth
          autoFocus
          margin={'normal'}
          required
          id="bairro"
          label="Bairro"
          placeholder="Bairro"
        />
        <TextField
          fullWidth
          autoFocus
          margin={'normal'}
          required
          id="cidade"
          label="Cidade"
          placeholder="Cidade"
        />
        <TextField
          fullWidth
          autoFocus
          margin={'normal'}
          required
          id="estado"
          label="Estado"
          placeholder="Estado"
        />

      </div>
      <div>
        <Button
          variant="contained"
          type={"submit"}
          fullWidth
          color={"primary"}
          margin={'normal'}
          onSubmit={() => navigate('/cadastro-endereco')}
        >
          Salvar
        </Button>
      </div>
    </LoginBox>
  )
}

export default AddressPage
