import React from 'react'
import { ContainerLogin, FormLogin, ContainerInput, ButtonLogin, InfoSignup , 
         ContainerGeneralPageLogin, ButtonSignup, TextLogin } from './StylePageLogin'

function FormPageLogin(props) {
    return (
        <ContainerGeneralPageLogin>
            <ContainerLogin>
                <FormLogin onSubmit={props.handleSave}>
                    <h1>Login</h1>
                    <ContainerInput>
                        <TextLogin>Email</TextLogin>
                        <input data-testid="email" 
                            name="email" 
                            type="email" 
                            value={props.form.email} 
                            onChange={props.handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextLogin>Senha</TextLogin>
                        <input data-testid="password"
                            name="senha" 
                            type="password" 
                            value={props.form.senha} 
                            onChange={props.handleInputChange}
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
                <ButtonSignup onClick={props.goToSignUp}>Cadastrar-se</ButtonSignup>
            </InfoSignup>
        </ContainerGeneralPageLogin>
    )
}

export default FormPageLogin