import styled from 'styled-components'

export const ContainerInfo = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px solid black;
    border-radius: 2vw;
    margin: 2vh 2vw;
    padding: 20px;
`

export const ContainerAlturaMinimo = styled.div`
    width: 100%;
    min-height: 52vh;
    background-color: #f5fffa;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerPageAllImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #f5fffa;
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

export const ContainerCardImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const CabecalhoTitle = styled.h2`
    margin: 1vh 1vw 0 1vw;
    display: flex;
    justify-self: flex-end;
` 

export const HeaderCardFeed = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`