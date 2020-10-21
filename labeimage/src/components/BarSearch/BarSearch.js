import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import useInput from '../../hooks/useInput'

import { Container } from './StyleBarSearch'

import FormSearch from './FormSearch'

export const baseUrl = "https://labeimage.herokuapp.com/user/"

function BarSearch() {
    const history = useHistory()
    const pathParams = useParams()

    const {form, onChange, resetInput} = useInput({
        name: "",
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        searchUser()
    }

    const searchUser = () => {
        history.push(`/search?name=${form.name}`)
    }

    const token = window.localStorage.getItem("token")

    useEffect(() => {
        showBarSearch()
    }, [pathParams])

    const showBarSearch = () => {
        if(token !== null) {
            return (
                <FormSearch 
                    handleSave={handleSave}
                    handleInputChange={handleInputChange}
                    form={form}
                />
            )
        }
    }
    
    return (
        <Container>
            {showBarSearch()}
        </Container>
        
    )
}

export default BarSearch