import React from 'react'
import useInput from '../../hooks/useInput'
import { ContainerModalImage, CloseButton } from './StyleModalCreateCollection'
import axios from 'axios'
import FormCreateCollection from './FormCreateCollection'

const url = "https://labeimage.herokuapp.com/collection/"

function ModalCreateCollection(props) {
    const { form, onChange, resetInput } = useInput({
        title: "",
        subtitle: "",
        image: ""
    })

    const handleInputChange = (event) => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        createCollections()
    }

    const refreshPage= () => {
        window.location.reload()
    }

    const createCollections = () => {
        const body = {
            title: form.title,
            subtitle: form.subtitle,
            image: form.image
        }

        const token = window.localStorage.getItem("token")

        axios
        .put(`${url}createcollection`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            alert("Álbum criado com sucesso")
            resetInput()
            refreshPage()
            props.closeModalCreateCollection()
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <ContainerModalImage>
            <FormCreateCollection
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                form={form}
            />
            <CloseButton onClick={() => props.closeModalCreateCollection()}>X</CloseButton>
        </ContainerModalImage>
    )
}

export default ModalCreateCollection