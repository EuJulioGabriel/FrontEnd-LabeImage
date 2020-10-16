import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo, ContainerCardImage, ButtonShowModalUpdateCollectionCover } from "../PageAllImages/StylePageAllImages"
import ModalUpdateCollectionCover from "../ModalUpdateCollectionCover/ModalUpdateCollectionCover"

function CardCollection(props) {
    const [collections, setCollections] = useState([])
    const [modalUpdateCollectionCover, setmodalUpdateCollectionCover] = useState(false)
    const [idCollection, setIdCollection] = useState("")

    useEffect(() => {
        setCollections(props.collections)
    }, [props.collections])

    const openModalUpdateCollectionCover = (Identificador) => {
        setIdCollection(Identificador)
        setmodalUpdateCollectionCover(true)
    }

    const closeModalUpdateCollectionCover = () => {
        setmodalUpdateCollectionCover(false)
    }

    const showmodalUpdateCollectionCover = () => {
        if (modalUpdateCollectionCover) {
            return (
                <ModalUpdateCollectionCover
                    idCollection={idCollection}
                    closeScreenEdit={closeModalUpdateCollectionCover} 
                />
            )
        }
    }

    const showCollections = () => {
        if(collections.length === 0) {
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
                                <ContainerInfo>
                                    <ContainerCardImage key={collection.id} onClick={() => props.getImagesById(collection.id)}>
                                        <img src= {collection.image}
                                            alt="Este álbum não possui uma imagem de capa"
                                            width="100"
                                            height="100">
                                        </img>
                                        <h2>{collection.title}</h2>
                                    </ContainerCardImage>
                                    <ButtonShowModalUpdateCollectionCover onClick={() => openModalUpdateCollectionCover(collection.id)}>Atualizar Capa do Álbum</ButtonShowModalUpdateCollectionCover>
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
            {showmodalUpdateCollectionCover()}
        </div>
    )
}

export default CardCollection