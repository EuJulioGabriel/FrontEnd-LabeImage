import React from 'react'
import axios from 'axios'

import { Botao } from './StylePageProfile'

const url = "https://labeimage.herokuapp.com/user/"

function ButtonFollow(props) {
    const token = window.localStorage.getItem("token")

    const verifyFollow = () => {
        if(props.follow.length > 0) {
            deleteFollow()
        } else {
            createFollow()
        }
    }

    const createFollow = () => {
        const body = {
            idFollowed: props.user.id
        }

        axios
        .put(`${url}follow`, body, {
            headers:{
                Authorization: token
            }
        })
        .then(() => {
            alert("Usuário seguido com sucesso")
            props.getFollow()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const deleteFollow = () => {
        axios
        .delete(`${url}unfollow/${props.user.id}`, {
            headers:{
                Authorization: token
            }
    
        })
        .then(() => {
            alert("Você deixou de seguir o usuário")
            props.getFollow()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Botao 
            cor={props.follow.length === 0 ? "white" : "#00BFFF"}
            corTexto={props.follow.length === 0 ? "#00BFFF" : "white"}
            onClick={() => verifyFollow()}
        >
            {props.follow.length === 0 ? "Seguir" : "Deixar de Seguir"}
        </Botao>
    )
}

export default ButtonFollow