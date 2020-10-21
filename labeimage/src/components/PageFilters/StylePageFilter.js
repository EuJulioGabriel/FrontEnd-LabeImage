import styled from 'styled-components'

export const ContainerFilter = styled.div`
    width: 100%;
    background-color: #f5fffa;
`

export const ContainerAlturaMinimo = styled.div`
    width: 100%;
    min-height: 30vh;
    background-color: #f5fffa;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
`

export const ContainerInput = styled.div`
    height: 10vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background-color: #f5fffa;
`

export const ContainerPageFilter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5fffa;
`

export const ContainerAllPageFilter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5fffa;
`

export const InfoFilter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const TextFilter = styled.label`
    display: grid;
    align-self: end;
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    padding: 0px;
`

export const ButtonBack = styled.button`
    width: 5vw;
    height: 3vw;
    background-color: white;
    color: #ff4500;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
    margin-left: 5vw;
`

export const ButtonPageCreateCollection = styled.button`
    width: 8vw;
    height: 3vw;
    background-color: white;
    color: #ff4500;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
`

export const ButtonPageFilters = styled.button`
    width: 4vw;
    height: 3vw;
    background-color: white;
    color: #ff4500;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
`

export const ButtonPageCollection = styled.button`
    width: 5vw;
    height: 3vw;
    background-color: white;
    color: #ff4500;
    font-size: 16px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
`

export const SelectCollection = styled.select`
    width: 30.5vw;
    height: 2.5vw;
`

export const ButtonFilter = styled.button`
    display: grid;
    grid-row: 2;
    align-items: center;
    background-color: #ff4500;
    width: 5vw;
    height: 5vh;
    border-style: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
`

export const FormFilter = styled.form`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const DescriptionPage = styled.h1`
    width: 100%;
    height: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputFilter = styled.input`
    width: 10vw;
    height: 4vh;
    margin-right: 1vw;
`