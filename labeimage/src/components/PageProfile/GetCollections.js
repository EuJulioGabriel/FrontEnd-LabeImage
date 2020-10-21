import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { ContainerAlturaMinimo } from "../PageImagesByCollection/StylePageImagesByCollection"
import { ContainerPageAllImage } from '../PageAllImages/StylePageAllImages'
import { DescriptionPage } from '../PageCreateImage/StylePageCreateImage'

import CardCollectionProfile from './CardCollectionProfile'

const url = "https://labeimage.herokuapp.com/collection/"

function GetCollections() {
    const [collections, setcollections] = useState([])

    const history = useHistory()
    const pathParams = useParams()

    useEffect(() => {
        getCollections()
    }, [])
    
    const getCollections = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}profile/${pathParams.id}`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setcollections(response.data.message)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const getImagesById = (Identificador) => {
        history.push("/profile/collection/" + Identificador)
    }

    const showCollections = () => {
        if(collections.length > 0) {
            return (
                <ContainerPageAllImage>
                    <DescriptionPage>Álbuns</DescriptionPage>
                    <CardCollectionProfile 
                        collections={collections}
                        getImagesById={getImagesById}
                    />
                </ContainerPageAllImage>
            )
        } else {
            return (
                <ContainerAlturaMinimo>
                    <p>Ele não possui nenhum álbum</p>
                </ContainerAlturaMinimo>
            )
        }
    }

    return (
        <>
            {showCollections()}
        </>
    )
}

export default GetCollections