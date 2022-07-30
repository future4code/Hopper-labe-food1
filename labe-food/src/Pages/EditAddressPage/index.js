import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useForm from './../../hooks/useForm';
import { GlobalStateContext } from './../../global/GlobalStateContatex';
import { getFullAddress, updateAddress } from './../../services/user';
import { goToProfile } from './../../Routes/coordinator';
import { PageContainer } from './../LoginPage/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, TextField, CircularProgress, Typography } from '@mui/material/'
import { FormContainer } from "../AddressPage/styled";


const EditAddressPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { states, setters } = useContext(GlobalStateContext)
    const address = states.address
    const [form, onChange, clear] = useForm({
        street: address.street,
        number: address.number,
        neighbourhood: address.neighbourhood,
        city: address.city,
        state: address.state,
        complement: address.complement,
    })

    useEffect(() => {
        getFullAddress(setters.setAddress, setIsLoading)
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault()
        updateAddress(form, navigate, setIsLoading, clear)
    }
    return (
        <PageContainer>
            <p onClick={() => goToProfile(navigate)}>
                <ArrowBackIosIcon fontSize="large" />
            </p>
            <Typography variant="h5" align="center">Editar Endereço</Typography>

            <FormContainer onSubmit={onSubmitForm}>
                <TextField
                    type="text"
                    fullWidth
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    required
                    label="Logradouro"
                    placeholder="Rua/Av."
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    type=""
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    required
                    label="Número"
                    placeholder="Número"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    type=""
                    name={"complement"}
                    value={form.complement}
                    onChange={onChange}
                    label="Complemento"
                    placeholder="Apto./Bloco"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    type="text"
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                    label="Bairro"
                    placeholder="Bairro"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    type="text"
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    required
                    label="Cidade"
                    placeholder="Cidade"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    type="text"
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    required
                    label="Estado"
                    placeholder="Estado"
                    variant="outlined"
                />


                <Button
                    variant="contained"
                    type={"submit"}
                    fullWidth
                    color={"primary"}
                    margin={"normal"}
                >   {isLoading ? (
                    <CircularProgress color={'inherit'} size={24} />
                ) : (
                    <>Salvar</>
                )}

                </Button>
            </FormContainer>

    
        </PageContainer>
    )
}

export default EditAddressPage