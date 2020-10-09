import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import axios from 'axios'
import FormPageLogin from './FormPageLogin'

export const baseUrl = "https://labeimage.herokuapp.com/user/"

function PageLogin() {
    const history = useHistory()

    const {form, onChange, resetInput} = useInput({
        email: "",
        senha: ""
    })

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token !== null) {
            history.replace("/createimage")
        }
    }, [])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickLogin()
    }

    const onClickLogin = () => {
        const body = {
            email: form.email,
            password: form.senha
        }

        axios.post(`${baseUrl}login`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            resetInput()
            history.replace("/createimage")
        })
        .catch((error) => {
            alert(error)
        })
    }

    const goToSignUp = () => {
        history.push("/signup")
    }
    
    return (
        <FormPageLogin 
            goToSignUp={goToSignUp}
            handleSave={handleSave}
            handleInputChange={handleInputChange}
            form={form}
        />
    )
}

export default PageLogin