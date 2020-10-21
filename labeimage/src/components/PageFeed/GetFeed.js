import React, { useState, useEffect } from 'react'
import { ContainerAlturaMinimo } from "./StylePageFeed"
import axios from 'axios'
import CardFeed from './CardFeed'

const url = "https://labeimage.herokuapp.com/image/"

function GetFeed(props) {
    const [images, setImages] = useState([])
    
    const getImages = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}feed`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setImages(response.data.message)
            console.log(response.data.message)
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
                    <p>Feed vazio</p>
                </ContainerAlturaMinimo>
            )
        } else {
            return (
                <CardFeed 
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

export default GetFeed