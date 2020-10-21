import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ContainerPageSignup,ButtonBack, ButtonPageFilters, 
         ButtonPageCollection, ButtonPageCreateImage, ButtonModalCreateCollection, ContainerNavBar } from './StyleNavBar'
import ModalCreateCollection from '../ModalCreteCollection/ModalCreateCollection';
  
function NavBar() {
    const [modalCreateCollection, setModalCreateCollection] = useState(false)

    const history = useHistory()
    const pathParams = useParams()

    const goToPageCreateImage = () => {
        history.push("/createimage")
    }

    const goToPageAllImages = () => {
        history.push("/image")
    }

    const goToPageFilters = () => {
        history.push("/image/filters")
    }

    const goToPageAllCollections = () => {
        history.push("/collection")
    }

    const goToPageFeed = () => {
        history.push("/feed")
    }

    const openModalCreateCollection = () => {
        setModalCreateCollection(true)
    }

    const closeModalCreateCollection = () => {
        setModalCreateCollection(false)
    }

    const showModalCreateCollection = () => {
        if (modalCreateCollection) {
            return (
                <ModalCreateCollection
                    closeModalCreateCollection={closeModalCreateCollection} 
                />
            )
        }
    }

    useEffect(() => {
        showNavBar()
    }, [pathParams])

    const token = window.localStorage.getItem("token")

    const showNavBar = () => {
        if(token !== null) {
            return (
                <ContainerPageSignup>
                    <ContainerNavBar>
                        <ButtonBack onClick={goToPageFeed}>Feed</ButtonBack>
                        <ButtonPageCreateImage onClick={goToPageCreateImage}>Criar Imagem</ButtonPageCreateImage>
                        <ButtonBack onClick={goToPageAllImages}>Galeria</ButtonBack>
                        <ButtonModalCreateCollection onClick={openModalCreateCollection}>Criar Álbum</ButtonModalCreateCollection>
                        <ButtonPageCollection onClick={goToPageAllCollections}>Álbuns</ButtonPageCollection>
                        <ButtonPageFilters onClick={goToPageFilters}>Busca</ButtonPageFilters>
                    </ContainerNavBar>
                    {showModalCreateCollection()}
                </ContainerPageSignup>
            )
        }
    }

    return (
        <>
            {showNavBar()}
        </>
    )
}

export default NavBar