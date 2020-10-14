import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo } from "../PageAllImages/StylePageAllImages"

function CardCollection(props) {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        setCollections(props.collections)
    }, [props.collections])

    return (
        <ContainerAlturaMinimo>
            {collections.map((collection) => {
                return(
                    <ContainerInfo key={collection.id} onClick={() => props.getImagesById(collection.id)}>
                        <img src= {collection.image}
                            alt="Este álbum não possui uma imagem de capa"
                            width="100"
                            height="100">
                        </img>
                        <h2>{collection.title}</h2>
                    </ContainerInfo>
                )
            })}
        </ContainerAlturaMinimo>
    )
}

export default CardCollection