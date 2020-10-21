import styled from 'styled-components'

export const HeaderProfile = styled.div`
    width: 100%;
    background-color: #f5fffa;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    background-color: #f5fffa;
`

export const Botao = styled.button`
font-size: 20px;
font-weight: bold;
background-color: ${props => props.cor};
color: ${props => props.corTexto};
cursor: pointer;
outline: none;
border: 1px solid #00BFFF;
border-radius: 10px;
min-width: 8%;
padding: 0.5% 1%;
display: flex;
justify-content: center;
align-items: center;
`