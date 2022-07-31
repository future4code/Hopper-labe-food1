import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHome } from '../Routes/coordinator';

const useUnProtectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToHome(navigate)
        }
    })
}

export default useUnProtectedPage