import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import ModalImage from '../ModalImage/ModalImage'
import FormPageFilter from './FormPageFilter'
import CardImage from '../CardImage/CardImage'
import { ContainerAlturaMinimo } from "../PageAllImages/StylePageAllImages"
import { DescriptionPage } from '../PageCreateImage/StylePageCreateImage'
import { ContainerAllPageFilter } from './StylePageFilter'

const url = "https://labeimage.herokuapp.com/image/"
  
function PageFilter(props) {
    const { form, onChange } = useInput({
        date: "",
        author: "",
        collection: "",
        tags: ""
    })

    const [images, setImages] = useState([])
    const [modalImage, setModalImage] = useState(false)
    const [idImage, setIdImage] = useState("")

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
    }, [history])

    useEffect(() => {
        getImagesByFilter()
    }, [])

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        getImagesByFilter()
    }

    const goToPageAllImages = () => {
        history.push("/image")
    }

    const getImagesByFilter = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}filters?date=${form.date}&author=${form.author}&collection=${form.collection}&tags=${form.tags}`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setImages(response.data.message)
        })
        .catch((error)=>{
            alert(error.message)
        })        
    }

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

    const showImages = () => {
        if(!images.length) {
            return (
                <ContainerAlturaMinimo>
                    <p>Você não possui nenhuma imagem ainda</p>
                </ContainerAlturaMinimo>
            )
        } else {
            return (
                <CardImage
                    openModalImage={openModalImage} 
                    images={images}
                />
            )
        }
    }

    return (
        <ContainerAllPageFilter>
            <DescriptionPage>Busca</DescriptionPage>
            {showModalImage()}
            <FormPageFilter 
                goToPageAllImages={goToPageAllImages}
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                form={form}
            />
            {showImages()}
        </ContainerAllPageFilter>
    )
}

export default PageFilter