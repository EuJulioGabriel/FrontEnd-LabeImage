import React, { useEffect } from 'react'
import axios from 'axios';
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'
import { ContainerPageSignup, ContainerSignUp, FormSignup,
         ContainerInput, ButtonSignup, TextSignup,
         ButtonBack, DescriptionPage, InputSignup } from '../PageSignup/StylePageSignup'

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

    const goToLogin = () => {
        history.push("/")
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
        .post(`${url}/createimage`, body, {
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
        <ContainerPageSignup>
            <ButtonBack onClick={goToLogin}>Voltar</ButtonBack>
            <DescriptionPage>Criar Imagem</DescriptionPage>
            <ContainerSignUp>
                <FormSignup onSubmit={handleSave}>
                    <ContainerInput>
                        <TextSignup>Subtítulo</TextSignup>
                        <InputSignup
                            onChange={handleInputChange}
                            name={"subtitle"}
                            value={form.subtitle} 
                            placeholder={"Subtítulo da foto"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Imagem</TextSignup>
                        <InputSignup
                            onChange={handleInputChange}
                            name={"file"}
                            value={form.file} 
                            placeholder={"Link da imagem"}
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Tags</TextSignup>
                        <InputSignup 
                            onChange={handleInputChange} 
                            name={"tags"} 
                            value={form.tags} 
                            placeholder={"Tags"} 
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextSignup>Coleção</TextSignup>
                        <InputSignup 
                            onChange={handleInputChange} 
                            name={"collection"} 
                            value={form.collection} 
                            placeholder={"Coleção"} 
                            type={"text"} 
                            required
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <ButtonSignup>Enviar</ButtonSignup>
                    </ContainerInput>
                </FormSignup>
            </ContainerSignUp>
        </ContainerPageSignup>
    )
}

export default PageSignup