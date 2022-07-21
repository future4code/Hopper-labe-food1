import {useState} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    //funcao lidando com onChange//
    const handleInputChange = (event) =>{
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }
    //limpando (retornando ao estado inicial)//
    const clear = () => {
        setForm(initialState)
    }
    return[form, setForm, handleInputChange, clear]
}

export default useForm