import React from 'react'
import { ContainerPageCreateImage, ContainerCreateImage, FormCreateImage,
         ContainerInput, ButtonCreateImage, TextCreateImage,
         DescriptionPage, InputCreateImage, SelectCollection } from './StylePageCreateImage'
  
function FormPageCreateImage(props) {
    return (
        <ContainerPageCreateImage>
                <DescriptionPage>Criar Imagem</DescriptionPage>
                <ContainerCreateImage>
                    <FormCreateImage onSubmit={props.handleSave}>
                        <ContainerInput>
                            <TextCreateImage>Subtítulo</TextCreateImage>
                            <InputCreateImage
                                onChange={props.handleInputChange}
                                name={"subtitle"}
                                value={props.form.subtitle} 
                                placeholder={"Subtítulo da foto"}
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextCreateImage>Imagem</TextCreateImage>
                            <InputCreateImage
                                onChange={props.handleInputChange}
                                name={"file"}
                                value={props.form.file} 
                                placeholder={"Link da imagem"}
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextCreateImage>Tags</TextCreateImage>
                            <InputCreateImage 
                                onChange={props.handleInputChange} 
                                name={"tags"} 
                                value={props.form.tags} 
                                placeholder={"Tags"} 
                                type={"text"} 
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextCreateImage>Coleção</TextCreateImage>
                                <SelectCollection 
                                name={"collection"} 
                                value={props.form.collection} 
                                onChange={props.handleInputChange} 
                                required
                                >
                                    <option value="">Selecione uma coleção</option>
                                    {props.collections.map((collection) => {
                                        return (
                                            <option key={collection.id} value={collection.id}>{collection.title}</option>
                                        )
                                    })}
                                </SelectCollection>
                        </ContainerInput>
                        <ContainerInput>
                            <ButtonCreateImage>Enviar</ButtonCreateImage>
                        </ContainerInput>
                    </FormCreateImage>
                </ContainerCreateImage>
        </ContainerPageCreateImage>
    )
}

export default FormPageCreateImage