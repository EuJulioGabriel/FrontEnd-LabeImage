import styled from 'styled-components'

export const ContainerModalImage = styled.div`
    position: fixed;
    top: 18vh;
    left: 25vw;
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    background-color: #f5fffa;
`

export const CloseButton = styled.button`
    background-color: red;
    color: white;
    width: 3vw;
    height: 5vh;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    border-radius: 16px;
    margin-left: 1vw;
`

export const ContainerInfo = styled.div`
    width: 30%;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 2vw;
    padding: 20px;
    cursor: pointer;
`

export const Image = styled.img`
    width: 200px;
    height: 300px;
`

export const DateImage = styled.div`
    margin-left: 1vw;
    padding-left: 1vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`