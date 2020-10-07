import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerLogin, FormLogin, ContainerInput, ButtonLogin, InfoSignup , 
         ContainerGeneralPageLogin, ButtonSignup, TextLogin } from './StylePageLogin'
import useInput from '../../hooks/useInput'
import axios from 'axios'

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

        axios.post(`${baseUrl}/login`, body)
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
        <ContainerGeneralPageLogin>
            <ContainerLogin>
                <FormLogin onSubmit={handleSave}>
                    <h1>Login</h1>
                    <ContainerInput>
                        <TextLogin>Email</TextLogin>
                        <input 
                            name="email" 
                            type="email" 
                            value={form.email} 
                            onChange={handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextLogin>Senha</TextLogin>
                        <input 
                            name="senha" 
                            type="password" 
                            value={form.senha} 
                            onChange={handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <ButtonLogin>LOGIN</ButtonLogin>
                    </ContainerInput>
                </FormLogin>
            </ContainerLogin>
            <InfoSignup>
                <h1>Ainda não é membro?</h1>
                <h3>Você não sabe o que está perdendo, cadastre-se</h3>
                <ButtonSignup onClick={goToSignUp}>Cadastrar-se</ButtonSignup>
            </InfoSignup>
        </ContainerGeneralPageLogin>
    )
}

export default PageLogin