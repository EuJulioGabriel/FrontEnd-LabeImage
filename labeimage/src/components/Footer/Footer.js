import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Rodape = styled.footer`
    background-color: #292929;
    color: #f5fffa;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    position: fixed;
    bottom: 0;
`

const Logo = styled.h1`
    margin-left: 5vw;
    cursor: pointer;
`

function Footer() {
    const goToFeed = () => {
        history.push("/")
    }

    const history = useHistory()

    return (
        <Rodape>
            <Logo onClick={goToFeed}>LabeImage</Logo>
        </Rodape>
    )
}

export default Footer