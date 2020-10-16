import React from 'react'
import { ContainerPageCreateImage, ContainerCreateImage, FormCreateImage,
    ContainerInput, ButtonCreateImage, TextCreateImage,
    DescriptionPage, InputCreateImage, SelectCollection } from '../PageCreateImage/StylePageCreateImage'

function SelectAddImageToCollection(props) {
    return (
        <div>
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
        </div>
    )
}

export default SelectAddImageToCollection