import axios from "axios";
import { goToAdressPage, goToHome, goToProfile } from "../Routes/coordinator";
import { BASE_URL } from './../constants/url';
import { getHeader } from './header';


export const login = (body, clear,navigate, setIsLoading ) => {
    setIsLoading(true);
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        goToHome(navigate)
        clear()
    })
    .catch((err)=>{
        setIsLoading(false);
        alert(err.response.data.message);
    });
    }

export const signUp = (body, navigate, setIsLoading, clear) =>{
    setIsLoading(true);
    axios.post(`${BASE_URL}/signup`, body)
    .then((res)=>{
        localStorage.setItem("tokenSignUp", res.data.token)
        alert("Cadastro criado com sucesso")
        goToAdressPage(navigate);
        setIsLoading(false);
        clear()
    })
.catch((err)=>{
    setIsLoading(false);
    alert(err.response.data.message);
})
}   

export const createAddAdress = (body, navigate, setIsLoading, clear) =>{
    setIsLoading(true);
    const getHeaderSignup = () =>{
        const tokenSignUp =localStorage.getItem("tokenSignUp")
        const header = {
          headers:{
            auth: tokenSignUp
          }
        }
        return header
    }
    axios.put(`${BASE_URL}/address`, body, getHeaderSignup()) 
    .then((res)=>{
        localStorage.removeItem("tokenSignUp");
        localStorage.setItem("token", res.data.token);
        alert("Salvo!")
        goToHome(navigate)
        setIsLoading(false);
        clear()
    })
.catch((err)=>{
    alert(err.response.data.message)
    setIsLoading(false);
})
}

export const updateAddress = (body, navigate, setIsLoading, clear) => {
    setIsLoading(true)
    axios
      .put(`${BASE_URL}/address`, body, getHeader())
      .then((res) => {
        clear()
        alert("Endereço salvo!");
        goToProfile(navigate);
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false)
      });
  };

