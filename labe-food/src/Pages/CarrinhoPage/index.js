import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  TelaCarrinho,
  NomePg,
  FormaPg,
  CheckPg,
  FormCheck,
  SessaoPg
} from './styled'
import Button from '@mui/material/Button'
import { GlobalStateContext } from './../../global/GlobalStateContatex'
import { useContext } from 'react'
import CardProduct from '../../Components/CardProduct'
import Footer from '../../Components/Footer'

const CarrinhoPage = () => {
  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalStateContext)
  const {id} = useParams()

  return (
    <TelaCarrinho>
      <NomePg>Meu Carrinho</NomePg>
      <button onClick={() => navigate(`/restaurante`)}>
        Continuar Comprando
      </button>

      {states.cart.map(products => (
        <CardProduct
          photoUrl={products.photoUrl}
          key={products.id}
          src={products.photoUrl}
          name={products.name}
          description={products.description}
          price={products.price}
        />
      ))}
      <SessaoPg>
        <main>
          <h3>Frete</h3>
          <h3>R$ 0,00</h3>
        </main>

        <main>
          <h2>SUBTOTAL</h2>
          <h2>R$ 0,00</h2>
        </main>

        <FormaPg>Forma de pagamento</FormaPg>
        <FormCheck>
          <CheckPg name="paymentMethod" id="radio1" type="radio" />
          <label for="radio1">Dinheiro</label>
        </FormCheck>
        <FormCheck>
          <CheckPg name="paymentMethod" id="radio2" type="radio" />
          <label for="radio2">Cartão</label>
        </FormCheck>

        <Button
          variant="contained"
          type={'submit'}
          fullWidth
          color={'primary'}
          margin={'normal'}
          onClick={() => navigate('/home')}
          sx={{marginBottom:'0'}}
        >
          Confirmar
        </Button>
      </SessaoPg>

      <Footer />
    </TelaCarrinho>
  )
}

export default CarrinhoPage
