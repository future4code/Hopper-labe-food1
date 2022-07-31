export const goToLoginPage = navigate => {
  navigate('/')
}

export const goToSignUp = navigate => {
  navigate('/cadastro-usuario')
}

export const goToAdressPage = navigate => {
  navigate('/cadastro-endereco')
}

export const goToHome = navigate => {
  navigate('/home')
}

export const goToRestaurant = (navigate, id) => {
  console.log(id)
  navigate(`/restaurante/${id}`)
}

export const goToCarrinho = navigate => {
  navigate('/carrinho')
}

export const goToProfile = navigate => {
  navigate('/perfil')
}

export const goToSearch = navigate => {
  navigate('/busca')
}

export const goBack = navigate => {
  navigate(-1)
}

export const goToEditProfile = navigate => {
  navigate('/editar-perfil')
}

export const goToEditAddress = navigate => {
  navigate('/editar-endereco')
}