import axios from 'axios'
import { BASE_URL } from './../constants/url'
import { getHeader } from './header'
import { goBack } from '../Routes/coordinator'

export const getProfile = (setProfile, setIsloading) => {
    setIsloading(true)
    axios
      .get(`${BASE_URL}/profile`, getHeader())
      .then((res) => {
        setProfile(res.data.user)
        setIsloading(false)
      })
      .catch((err) => {
        alert('Ops! algo deu errado!')
        setIsloading(false)
      })
  }

export const editProfile = (body, navigate, setIsLoading, clear) => {
    setIsLoading(true);
    axios
        .put(`${BASE_URL}/profile`, body, getHeader())
        .then((res) => {
            clear()
            alert("Perfil editado com sucesso!")
            goBack(navigate)
            setIsLoading(false)

        })
        .catch((err) => {
            alert(err.response.data.message)
            setIsLoading(false)
        })
}