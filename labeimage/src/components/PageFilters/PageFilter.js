import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import ModalCreateCollection from '../ModalCreteCollection/ModalCreateCollection';

const url = "http://localhost:3003/image/"
  
function PageFilter() {
    const { form, onChange, resetInput } = useInput({
        date: "",
        author: "",
        collection: "",
        tags: ""
    })

    const [images, setImages] = useState([])
    const [modalCreateCollection, setModalCreateCollection] = useState(false)

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
    }, [history])

    useEffect(() => {
        getImagesByFilter()
    }, [])

    const handleInputChange = event => {
        const { name, value} = event.target;
    
        onChange(name, value);
    }

    const handleSave = (event) => {
        event.preventDefault()
        getImagesByFilter()
    }

    const goToPageAllImages = () => {
        history.push("/image")
    }

    const getImagesByFilter = () => {
        const body = {
            "date": `${form.date}`,
            "author": `${form.author}`,
            "collection": `${form.collection}`,
            "tags": `${form.tags}`,
        }

        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}filters`, body, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setImages(response.data.message)
        })
        .catch((error)=>{
            console.log(error)
            alert(error.message)
        })        
    }

    const openModalCreateCollection = () => {
        setModalCreateCollection(true)
    }

    const closeModalCreateCollection = () => {
        setModalCreateCollection(false)
    }

    const showModalCreateCollection = () => {
        if (modalCreateCollection) {
            return (
                <ModalCreateCollection
                    closeModalCreateCollection={closeModalCreateCollection} 
                />
            )
        }
    }

    return (
        <div>
            <button onClick={() => openModalCreateCollection()}>Criar álbum</button>
            {images.map((image) => {
                return(
                    <div key={image.id}>
                        {}
                    </div>
                )
            })}
            {/* <FormPageCreateImage 
                goToPageAllImages={goToPageAllImages}
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                form={form}
            />
            {showModalCreateCollection()} */}
        </div>
    )
}

export default PageFilter