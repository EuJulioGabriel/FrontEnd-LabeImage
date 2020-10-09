import React, { useEffect } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import FormPageCreateImage from './FormPageCreateImage'

const url = "https://labeimage.herokuapp.com/image/"
  
function PageSignup() {
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

    const goToPageAllImages = () => {
        history.push("/image")
    }

    const onClickSignup = () => {
        const body ={
            subtitle: form.subtitle,
            file: form.file,
            tags: form.tags,
            collection: form.collection,
        }

        const token = window.localStorage.getItem("token")

        axios
        .post(`${url}createimage`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            resetInput()
            history.push("/image")
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
        />
    )
}

export default PageSignup