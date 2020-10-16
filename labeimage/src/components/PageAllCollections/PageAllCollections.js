import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ContainerPageAllImage } from '../PageAllImages/StylePageAllImages'
import { DescriptionPage } from '../PageCreateImage/StylePageCreateImage'
import CardCollection from './CardCollection'

const url = "https://labeimage.herokuapp.com/collection/"

function PageAllCollections() {
    const [collections, setCollections] = useState([])

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    useEffect(() => {
        getAllCollections()
    }, [])

    const getAllCollections = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}getallcollections`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setCollections(response.data.message)
        })
        .catch((error)=>{
            alert(error.message)
        })        
    }

    const getImagesById = (Identificador) => {
        history.push("/image/collection/" + Identificador)
    }

    return (
        <ContainerPageAllImage>
            <DescriptionPage>Álbuns</DescriptionPage>
            <CardCollection 
                collections={collections}
                getImagesById={getImagesById}
            />
        </ContainerPageAllImage>
    )
}

export default PageAllCollections