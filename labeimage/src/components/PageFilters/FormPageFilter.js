import React from 'react'
import { ContainerPageFilter, ContainerFilter, FormFilter,
         ContainerInput, ButtonFilter, TextFilter,
         InputFilter } from '../PageFilters/StylePageFilter'
  
function FormPageFilter(props) {
    return (
        <ContainerPageFilter>
                <ContainerFilter>
                    <FormFilter onSubmit={props.handleSave}>
                        <ContainerInput>
                            <TextFilter>Data</TextFilter>
                            <InputFilter
                                onChange={props.handleInputChange}
                                name={"date"}
                                value={props.form.date}
                                type={"date"}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextFilter>Autor</TextFilter>
                            <InputFilter
                                onChange={props.handleInputChange}
                                name={"author"}
                                value={props.form.author} 
                                placeholder={"Nome do autor"}
                                type={"text"} 
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextFilter>Álbum</TextFilter>
                            <InputFilter 
                                onChange={props.handleInputChange} 
                                name={"collection"} 
                                value={props.form.collection} 
                                placeholder={"Nome do Álbum"} 
                                type={"text"} 
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextFilter>Tags</TextFilter>
                            <InputFilter 
                                onChange={props.handleInputChange} 
                                name={"tags"} 
                                value={props.form.tags} 
                                placeholder={"Tags"} 
                                type={"text"}
                            />    
                        </ContainerInput>
                        <ContainerInput>
                            <ButtonFilter>Filtrar</ButtonFilter>
                        </ContainerInput>
                    </FormFilter>
                </ContainerFilter>
        </ContainerPageFilter>
    )
}

export default FormPageFilter