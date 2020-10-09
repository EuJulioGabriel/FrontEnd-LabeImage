import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo } from "../PageAllImages/StylePageAllImages"
import axios from 'axios'

const url = "https://labeimage.herokuapp.com/image/"

function CardImage(props) {
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
                <ContainerAlturaMinimo>
                    {images.map((image) => {
                        return(
                            <ContainerInfo key={image.id} onClick={() => props.openModalImage(image.id)}>
                                <img src= {image.file}
                                        width="100"
                                        height="100">
                                </img>
                                <h2>{image.subtitle}</h2>
                            </ContainerInfo>
                        )
                    })}
                </ContainerAlturaMinimo>
            )
        }
    }

    return (
        <div>
            {showImages()}
        </div>
    )
}

export default CardImage