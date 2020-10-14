import styled from 'styled-components'

export const ContainerInfo = styled.div`
    width: 10%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    margin: 2vh 2vw;
    padding: 20px;
    cursor: pointer;
`

export const ContainerAlturaMinimo = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
`

export const ContainerPageAllImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ButtonCreateImage = styled.button`
    width: 10vw;
    height: 3vw;
    background-color: white;
    color: #ff4500;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
    margin-left: 8vw;
    margin-top: 3vh;
`