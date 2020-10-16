import React from 'react'
import { ContainerPageSignup, ContainerSignUp, FormSignup,
         ContainerInput, ButtonSignup, TextSignup,
         DescriptionPage, InputSignup } from '../PageSignup/StylePageSignup'
  
function FormCreateCollection(props) {
    return (
        <ContainerPageSignup>
            <DescriptionPage>Criar Álbum</DescriptionPage>
            <ContainerSignUp>
                <FormSignup onSubmit={props.handleSave}>
                    <ContainerInput>
                        <TextSignup>Título</TextSignup>
                        <InputSignup
                            onChange={props.handleInputChange}
                            name={"title"}
                            value={props.form.title} 
                            placeholder={"Título do álbum"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Descrição</TextSignup>
                        <InputSignup
                            onChange={props.handleInputChange}
                            name={"subtitle"}
                            value={props.form.subtitle} 
                            placeholder={"Descrição do álbum"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Link da imagem</TextSignup>
                        <InputSignup 
                            onChange={props.handleInputChange} 
                            name={"image"} 
                            value={props.form.image} 
                            placeholder={"Link da imagem de capa do álbum"} 
                            type={"text"}
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

export default FormCreateCollection