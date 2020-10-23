import React from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import FormPageSignup from './FormPageSignup'
import { useHistory } from 'react-router-dom'

const url = "https://labeimage.herokuapp.com/user/"
  
function PageSignup() {
    const { form, onChange, resetInput } = useInput({
        name: "",
        nickname: "",
        email: "",
        password: "",
    })

    const history = useHistory();

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickSignup()
    }

    const goToLogin = () => {
        history.push("/")
    }

    const onClickSignup = () => {
        const body ={
            name: form.nomeUsuario,
            email: form.email,
            nickname: form.nickname,
            password: form.senha,
        }

        axios
        .post(`${url}signup`, body)
        .then(response=>{
            window.localStorage.setItem("token", response.data.token)
            resetInput()
            history.push("/feed")
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <FormPageSignup
            goToLogin={goToLogin} 
            handleSave={handleSave}
            handleInputChange={handleInputChange}
            form={form}
        />        
    )
}

export default PageSignup