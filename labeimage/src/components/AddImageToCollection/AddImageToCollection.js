import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useInput from '../../hooks/useInput'
import SelectAddImageToCollection from '../AddImageToCollection/SelectAddImageToCollection'
import { ButtonAdd, ContainerAddImageToCollection } from './StyleAddImageToCollection'

const url = "https://labeimage.herokuapp.com/collection/"

function AddImageToCollection(props) {
    const [collections, setCollections] = useState([])

    const { form, onChange, resetInput } = useInput({
        collection: "",
    })

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

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
        .catch((error)=> {
            alert(error.message)
        })        
    }

    const addImageToCollection = (idImage, idCollection) => {
        const body = {
            idImage: idImage,
            idCollection: idCollection
        }

        const token = window.localStorage.getItem("token")

        axios
        .put(`${url}addimagetocollection`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            alert("Imagem adicionanda com sucesso ao álbum")
        })
        .catch((error)=>{
            alert("A imagem já está no álbum ou estamos passando por instabilidade")
        })  
    }

    return (
        <ContainerAddImageToCollection>
            <h2>Inserir está imagem a uma coleção</h2>
            <SelectAddImageToCollection 
                form={form}
                handleInputChange={handleInputChange}
                collections={collections}
            />
            <ButtonAdd onClick={() => addImageToCollection(props.idImage, form.collection)}>Adicionar</ButtonAdd>
        </ContainerAddImageToCollection>
    )
}

export default AddImageToCollection