import React, { useState, useEffect } from 'react'
import { ContainerModalImage, CloseButton, Image, ContainerInfo, DateImage } from '../ModalImage/StyleModalImage'
import axios from 'axios'

const url = "https://labeimage.herokuapp.com/image/"

function ModalImage(props) {
    const [image, setImage] = useState({})

    useEffect(() => {
        getImage(props.idImage)
    }, [])

    const getImage = (id) => {
        const token = window.localStorage.getItem("token")

        axios.get(`${url}image/${id}`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setImage(response.data.message)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <ContainerModalImage>
            <DateImage>
                <h2>Título: {image.subtitle}</h2>
                <p>Autor: {image.name}</p>
                <p>Criado em: {image.createdAt}</p>
                <p>Tags: {image.tags}</p>
            </DateImage>
            <ContainerInfo>
                <Image src= {image.file}></Image>
            </ContainerInfo>
            <CloseButton onClick={() => props.closeScreenEdit()}>X</CloseButton>
        </ContainerModalImage>
    )
}

export default ModalImage