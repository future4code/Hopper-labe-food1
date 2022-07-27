import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { value, name } = event.target
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const clear = () => {
        setForm(initialState)
    }

    const setStates = (states) => {
        setForm(states)
    }
    return [form, onChange, clear, setStates]
}

export default useForm