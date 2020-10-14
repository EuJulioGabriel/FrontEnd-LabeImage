import React, { useState, useEffect } from 'react'
import { ContainerAlturaMinimo } from "./StylePageAllImages"
import axios from 'axios'
import CardImage from '../CardImage/CardImage'

const url = "https://labeimage.herokuapp.com/image/"

function GetAllImages(props) {
    const [images, setImages] = useState([])
    
    const getImages = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}image`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setImages(response.data.message)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    useEffect(() => {
        getImages()
    }, [])

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
                    openModalImage={props.openModalImage} 
                    images={images}
                />
            )
        }
    }

    return (
        <div>
            {showImages()}
        </div>
    )
}

export default GetAllImages