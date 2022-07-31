
import { useNavigate } from 'react-router-dom';
import { goToLoginPage, goToHome } from './../../Routes/coordinator';
import LogoSplash from './../../assets/logo-branca.svg'
import { Container, ImgSplash } from './styled'

const SplashPage = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    setTimeout(() => {
        if (token) {
            goToHome(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }, 2500);


    return (
        <Container>
            <ImgSplash src={LogoSplash} />
        </Container>
    )
}

export default SplashPage