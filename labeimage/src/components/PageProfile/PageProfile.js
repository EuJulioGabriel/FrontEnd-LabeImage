import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { Container } from './StylePageProfile'

import UserPanel from './UserPanel'
import GetCollections from './GetCollections'

const url = "https://labeimage.herokuapp.com/user/"

function PageProfile() {
    const [user, setUser] = useState({})
    const history = useHistory()
    const pathParams = useParams()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        }
    }, [history])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}getuser/${pathParams.id}`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setUser(response.data.message)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Container>
            <UserPanel 
                user={user}
            />
            <GetCollections />
        </Container>
    )
}

export default PageProfile