import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo, ContainerCardImage } from "../PageAllImages/StylePageAllImages"

function CardCollectionProfile(props) {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        setCollections(props.collections)
    }, [props.collections])

    const showCollections = () => {
        if(!collections.length) {
            return (
                <ContainerAlturaMinimo>
                    <p>Nenhum álbum ainda foi criado</p>
                </ContainerAlturaMinimo>
            )
        } else  {
            return (
                <ContainerAlturaMinimo>
                    
                    {collections.map((collection) => {
                        return(
                            <ContainerInfo key={collection.id}>
                                <ContainerCardImage 
                                    onClick={() => props.getImagesById(collection.id)}
                                >
                                    <img src= {collection.image}
                                        alt="Este álbum não possui uma imagem de capa"
                                        width="100"
                                            height="100">
                                    </img>
                                    <h2>{collection.title}</h2>
                                </ContainerCardImage>
                            </ContainerInfo>
                        )
                    })}
                </ContainerAlturaMinimo>
            )
        }
    }

    return (
        <div>
            {showCollections()} 
        </div>
    )
}

export default CardCollectionProfile