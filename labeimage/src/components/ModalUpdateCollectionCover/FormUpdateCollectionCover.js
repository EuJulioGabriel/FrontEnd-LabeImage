import React from 'react'
import { FormLogin, ContainerInput, ButtonUpdate, TextUpdate, InputSignup } from './StyleModalUpdateCollectionCover'
import { ContainerPageSignup, ContainerSignUp, DescriptionPage,  } from '../PageSignup/StylePageSignup'

function FormUpdateCollectionCover(props) {
    return (
        <ContainerPageSignup>
            <DescriptionPage>Atualizar capa do álbum</DescriptionPage>
            <ContainerSignUp>
                <FormLogin onSubmit={props.handleSave}>
                    <ContainerInput>
                        <TextUpdate>Link da imagem</TextUpdate>
                        <InputSignup 
                            name="image" 
                            type="text" 
                            value={props.form.image} 
                            onChange={props.handleInputChange}
                            placeholder={"Link da imagem da capa"}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <ButtonUpdate>Atualizar</ButtonUpdate>
                    </ContainerInput>
                </FormLogin>
            </ContainerSignUp>
        </ContainerPageSignup>
    )
}

export default FormUpdateCollectionCover