import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"

const Head = styled.header`
    background-color: black;
    color: white;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoutButton = styled.button`
    background-color: #ff4500;
    width: 5%;
    height: 5vh;
    border-style: none;
    border-radius: 2px;
    margin-right: 5vw;
`

const Logo = styled.h1`
    margin-left: 5vw;
    cursor: pointer;
`

function Header() {
    const pathParams = useParams()

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const logout = () => {
        window.localStorage.clear()
        history.push("/")
    }

    useEffect(() => {
        showInScreen()
    }, [pathParams])

    const showInScreen = () => {
        if (token !== null) {
            return (
                <LogoutButton onClick={logout}>Logout</LogoutButton>
            )
        }
    }

    const goToFeed = () => {
        history.push("/")
    }

    return(
        <Head>
            <Logo onClick={goToFeed}>LabeImage</Logo>
            {showInScreen()}
        </Head>
    )
}

export default Header