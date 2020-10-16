import React from 'react'
import axios from 'axios'
import FormUpdateCollectionCover from './FormUpdateCollectionCover'
import useInput from '../../hooks/useInput'
import { ContainerModalImage, CloseButton } from '../ModalCreteCollection/StyleModalCreateCollection'

const url = "https://labeimage.herokuapp.com/collection/"

function ModalUpdateCollectionCover(props) {
    const {form, onChange, resetInput} = useInput({
        image: "",
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        updateCollectionCover()
    }

    const updateCollectionCover = () => {
        const body = {
            id: props.idCollection,
            image: form.image
        }
        const token = window.localStorage.getItem("token")

        axios
        .put(`${url}updatecollectioncover`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            alert("Imagem modificada com sucesso")
            resetInput()
            props.closeScreenEdit()
            window.location.reload()
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <ContainerModalImage>
            <FormUpdateCollectionCover 
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                form={form}
            />
            <CloseButton onClick={() => props.closeScreenEdit()}>X</CloseButton>
        </ContainerModalImage>
    )
}

export default ModalUpdateCollectionCover