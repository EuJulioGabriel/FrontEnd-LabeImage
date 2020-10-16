import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import { LogoutButton, Head, Logo } from './StyleHeader'

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