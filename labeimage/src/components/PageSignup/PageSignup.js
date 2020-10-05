import React from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import { ContainerPageSignup, ContainerSignUp, FormSignup,
         ContainerInput, ButtonSignup, TextSignup,
         ButtonBack, DescriptionPage, InputSignup } from '../PageSignup/StylePageSignup'

const url = ""
  
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
            "email": form.email,
            "password": form.senha,
            "username": form.nomeUsuario,
            "nickname": form.nickname
        }

        axios
        .post(`${url}/signup`, body)
        .then(response=>{
            history.push("/")
            resetInput()
            window.localStorage.setItem("token", response.data.token)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <ContainerPageSignup>
            <ButtonBack onClick={goToLogin}>Voltar</ButtonBack>
            <DescriptionPage>Cadastro</DescriptionPage>
            <ContainerSignUp>
                <FormSignup onSubmit={handleSave}>
                    <ContainerInput>
                        <TextSignup>Nome</TextSignup>
                        <InputSignup
                            onChange={handleInputChange}
                            name={"nomeUsuario"}
                            value={form.nomeUsuario} 
                            placeholder={"Nome do usuário"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Nickname</TextSignup>
                        <InputSignup
                            onChange={handleInputChange}
                            name={"nickname"}
                            value={form.nickname} 
                            placeholder={"Nome de cadastro do usuário"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Email</TextSignup>
                        <InputSignup 
                            onChange={handleInputChange} 
                            name={"email"} 
                            value={form.email} 
                            placeholder={"Email"} 
                            type={"email"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Senha</TextSignup>
                        <InputSignup 
                            onChange={handleInputChange} 
                            name={"senha"} 
                            value={form.senha} 
                            placeholder={"Senha"} 
                            type={"password"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <ButtonSignup>Cadastrar</ButtonSignup>
                    </ContainerInput>
                </FormSignup>
            </ContainerSignUp>
        </ContainerPageSignup>
    )
}

export default PageSignup