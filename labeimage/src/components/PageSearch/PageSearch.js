import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { Container } from './StylePageSearch'
import CardPageSearch from './CardPageSearch'

export const baseUrl = "https://labeimage.herokuapp.com/user/"

function PageSearch() {
    const history = useHistory()
    const pathParams = useParams()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        }
    }, [history])

    useEffect(() => {
        searchUser()
    }, [pathParams])

    const searchUser = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}search${history.location.search}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            setUsers(response.data.message)
        })
        .catch((error) => {
            alert(error)
        })
    }
    
    return (
        <Container>
            <CardPageSearch 
                users={users}
            />
        </Container>
    )
}

export default PageSearch