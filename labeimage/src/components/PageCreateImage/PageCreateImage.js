import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import FormPageCreateImage from './FormPageCreateImage'

const url = "https://labeimage.herokuapp.com/image/"
const urlTwo = "https://labeimage.herokuapp.com/collection/"
  
function PageSignup() {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        getAllCollections()
    }, [])

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

    const { form, onChange, resetInput } = useInput({
        subtitle: "",
        file: "",
        tags: "",
        collection: "",
    })

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickSignup()
    }

    const addImageToCollection = (idImage, idCollection) => {
        const body = {
            idImage: idImage,
            idCollection: idCollection
        }

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
        <div>
            <FormPageCreateImage 
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                form={form}
                collections={collections}
            />
        </div>
    )
}

export default PageSignup