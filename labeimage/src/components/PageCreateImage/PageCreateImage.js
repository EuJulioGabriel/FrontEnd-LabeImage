import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import FormPageCreateImage from './FormPageCreateImage'

const url = "https://labeimage.herokuapp.com/image/"
const urlTwo = "https://labeimage.herokuapp.com/collection/"
  
function PageSignup() {
    const { form, onChange, resetInput } = useInput({
        subtitle: "",
        file: "",
        tags: "",
        collection: "",
    })

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

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickSignup()
    }

    const goToPageAllImages = () => {
        history.push("/image")
    }

    const getAllCollections = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${urlTwo}getallcollections`, {
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

    const addImageToCollection = (idImage, idCollection) => {
        const body = {
            idImage: idImage,
            idCollection: idCollection
        }

        console.log(body)

        const token = window.localStorage.getItem("token")

        axios
        .put(`${urlTwo}addimagetocollection`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            history.push("/image")
            resetInput()
        })
        .catch((error)=>{
            alert(error.message)
        })  
    }

    const onClickSignup = () => {
        const body ={
            subtitle: form.subtitle,
            file: form.file,
            tags: form.tags,
        }

        const token = window.localStorage.getItem("token")

        axios
        .post(`${url}createimage`, body, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            addImageToCollection(response.data.message, form.collection)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <FormPageCreateImage 
            goToPageAllImages={goToPageAllImages}
            handleSave={handleSave}
            handleInputChange={handleInputChange}
            form={form}
            collections={collections}
        />
    )
}

export default PageSignup