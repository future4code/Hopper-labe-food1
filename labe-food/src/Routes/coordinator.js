export const goToLoginPage = (navigate)  => {
    navigate("/")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro-usuario")
}

export const goToAdressPage = (navigate) =>{
    navigate("/cadastro-endereco")
}

export const goToHome = (navigate) => {
navigate("/home")
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurante/${id}`)
}

export const goToCarrinho = (navigate) =>{
    navigate("/carrinho")
}

export const goToProfile = (navigate) => {
    navigate("/perfil")
}