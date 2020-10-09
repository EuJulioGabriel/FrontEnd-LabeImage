import React from 'react'
import { ContainerPageSignup, ContainerSignUp, FormSignup,
         ContainerInput, ButtonSignup, TextSignup,
         ButtonBack, DescriptionPage, InputSignup } from '../PageSignup/StylePageSignup'
  
function FormPageSignup(props) {
    return (
        <ContainerPageSignup>
            <ButtonBack onClick={props.goToLogin}>Voltar</ButtonBack>
            <DescriptionPage>Cadastro</DescriptionPage>
            <ContainerSignUp>
                <FormSignup onSubmit={props.handleSave}>
                    <ContainerInput>
                        <TextSignup>Nome</TextSignup>
                        <InputSignup
                            onChange={props.handleInputChange}
                            name={"nomeUsuario"}
                            value={props.form.nomeUsuario} 
                            placeholder={"Nome do usuário"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Nickname</TextSignup>
                        <InputSignup
                            onChange={props.handleInputChange}
                            name={"nickname"}
                            value={props.form.nickname} 
                            placeholder={"Nome de cadastro do usuário"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Email</TextSignup>
                        <InputSignup 
                            onChange={props.handleInputChange} 
                            name={"email"} 
                            value={props.form.email} 
                            placeholder={"Email"} 
                            type={"email"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Senha</TextSignup>
                        <InputSignup 
                            onChange={props.handleInputChange} 
                            name={"senha"} 
                            value={props.form.senha} 
                            placeholder={"Senha"} 
                            type={"password"} 
                            title="Deve ter no mínimo 6 caracteres"
                            pattern={"[a-zA-Z0-9]{6,}"}
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

export default FormPageSignup