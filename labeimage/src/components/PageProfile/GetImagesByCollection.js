import React, { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { ContainerAlturaMinimo } from "../PageImagesByCollection/StylePageImagesByCollection"
import axios from 'axios'
import CardImage from '../CardImage/CardImage'

const url = "https://labeimage.herokuapp.com/image/"

function GetImagesByCollection(props) {
    const [images, setImages] = useState([])

    const history = useHistory()
    const pathParams = useParams()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        }
    }, [history])
    
    const getImages = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}collection/${pathParams.id}`, {
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
                    <p>O usuário ainda não possui nenhuma imagem</p>
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

export default GetImagesByCollection