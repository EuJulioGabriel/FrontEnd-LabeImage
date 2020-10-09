import React from 'react'
import { ContainerPageSignup, ContainerSignUp, FormSignup,
         ContainerInput, ButtonSignup, TextSignup,
         ButtonBack, DescriptionPage, InputSignup } from '../PageSignup/StylePageSignup'
  
function FormPageCreateImage(props) {

    return (
        <ContainerPageSignup>
            <ButtonBack onClick={props.goToPageAllImages}>Galeria</ButtonBack>
                <DescriptionPage>Criar Imagem</DescriptionPage>
                <ContainerSignUp>
                    <FormSignup onSubmit={props.handleSave}>
                        <ContainerInput>
                            <TextSignup>Subtítulo</TextSignup>
                            <InputSignup
                                onChange={props.handleInputChange}
                                name={"subtitle"}
                                value={props.form.subtitle} 
                                placeholder={"Subtítulo da foto"}
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextSignup>Imagem</TextSignup>
                            <InputSignup
                                onChange={props.handleInputChange}
                                name={"file"}
                                value={props.form.file} 
                                placeholder={"Link da imagem"}
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextSignup>Tags</TextSignup>
                            <InputSignup 
                                onChange={props.handleInputChange} 
                                name={"tags"} 
                                value={props.form.tags} 
                                placeholder={"Tags"} 
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextSignup>Coleção</TextSignup>
                            <InputSignup 
                                onChange={props.handleInputChange} 
                                name={"collection"} 
                                value={props.form.collection} 
                                placeholder={"Coleção"} 
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <ButtonSignup>Enviar</ButtonSignup>
                        </ContainerInput>
                    </FormSignup>
                </ContainerSignUp>
        </ContainerPageSignup>
    )
}

export default FormPageCreateImage