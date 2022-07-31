import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import useForm from './../../hooks/useForm';
import { goToProfile } from './../../Routes/coordinator';
import { Button, TextField, CircularProgress, Typography } from '@mui/material/'
import { editProfile } from "../../services/profile";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getProfile } from "../../services/profile";
import { PageContainer } from "../LoginPage/styled";
import { FlexForm } from "../SignupPage/styled"
import { GlobalStateContext } from './../../global/GlobalStateContatex';
import useProtectedPage from './../../hooks/useProtectedPage';

const EditProfilePage = () => {
    useProtectedPage();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { states, setters } = useContext(GlobalStateContext)
    const profile = states.profile

    const [form, onChange, clear] = useForm({
        name: profile.name,
        email: profile.email,
        cpf: profile.cpf,
    })
    useEffect(() => {
        getProfile(setters.setProfile, setIsLoading)
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault()
        editProfile(form, navigate, setIsLoading, clear)
    }



    return (
        <PageContainer>
            <p onClick={() => goToProfile(navigate)}>
                <ArrowBackIosIcon fontSize="large" />
            </p>
            <Typography variant="h5" align="center">Editar Perfil</Typography>

            <FlexForm onSubmit={onSubmitForm}>

                <TextField
                    value={form.name}
                    name={'name'}
                    onChange={onChange}
                    required
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    type="text"
                    variant="outlined"
                    margin={'normal'}
                />

                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    required
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    placeholder="email@email.com"
                    margin={'normal'}

                />
                <TextField
                    inputProps={{
                        maxLength: 14,
                        pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`,
                    }}
                    name={'cpf'}
                    value={form.cpf}
                    onChange={onChange}
                    required
                    label="CPF"
                    placeholder="000.000.000-00"
                    variant="outlined"
                    type="text"
                    margin={'normal'}
                />
                <Button
                    variant="contained"
                    type={'submit'}
                    fullWidth
                    color={'primary'}
                    margin={'normal'}

                >
                    {isLoading ? (
                        <CircularProgress color={'inherit'} size={24} />
                    ) : (
                        <>Salvar</>
                    )}
                </Button>



            </FlexForm>
         
        </PageContainer>
    )
}

export default EditProfilePage