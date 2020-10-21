import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { HeaderProfile } from './StylePageProfile'

import ButtonFollow from './ButtonFollow'

const url = "https://labeimage.herokuapp.com/user/"

function UserPanel(props) {
    const [follow, setFollow] = useState([])
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        getFollow()
    }, [props.user])

    const getFollow = () => {
        axios
        .get(`${url}getfollow?idFollowed=${props.user.id}`, {
            headers:{
                Authorization: token
            }
        })
        .then((response) => {
            setFollow(response.data.message)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
            <HeaderProfile>
                <h2>{props.user.name}</h2>
                <h2>@{props.user.nickname}</h2>
                <ButtonFollow 
                    follow={follow}
                    user={props.user}
                    getFollow={getFollow}
                />
            </HeaderProfile>
    )
}

export default UserPanel