import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ModalImage from '../ModalImage/ModalImage'
import GetImagesByCollection from './GetImagesByCollection'
import { ContainerPageAllImage } from '../PageAllImages/StylePageAllImages'

function PageImagesByCollection() {
    const [modalImage, setModalImage] = useState(false)
    const [idImage, setIdImage] = useState("")
    
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    const openModalImage = (Identificador) => {
        setIdImage(Identificador)
        setModalImage(true)
    }

    const closeModalImage = () => {
        setModalImage(false)
    }

    const showModalImage = () => {
        if (modalImage) {
            return (
                <ModalImage
                    idImage={idImage}
                    closeScreenEdit={closeModalImage} 
                />
            )
        }
    }

    return (
        <ContainerPageAllImage>
            {showModalImage()}
            <GetImagesByCollection
                openModalImage={openModalImage}
            />
        </ContainerPageAllImage>
    )
}

export default PageImagesByCollection