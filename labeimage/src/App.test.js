import React from "react"
import App from "./App"
import axios from 'axios'
import {render, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

import PageAllImages from "./components/PageAllImages/PageAllImages"
import PageSignup from "./components/PageSignup/PageSignup"
import PageCreateImage from "./components/PageCreateImage/PageCreateImage"
import PageLogin from "./components/PageLogin/PageLogin"

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

axios.get = jest.fn().mockResolvedValue({
    data: {message: []}
})
  
axios.post = jest.fn().mockResolvedValue()

describe("Renderização inicial da aplicação", () => {
  test("Deve aparecer na tela, com o mesmo texto", () => {
    const { getByText } = render(<App />)

    const login = getByText('Login')
    const loginButton = getByText(/LOGIN/)
    const describe1 = getByText(/Ainda não é membro?/)
    const describe2 = getByText(/Você não sabe o que está perdendo, cadastre-se/)

    expect(login).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(describe1).toBeInTheDocument()
    expect(describe2).toBeInTheDocument()
  })

  test("Deve aparecer na tela, com o mesmo texto", () => {
    const { getByText, getByPlaceholderText } = render(<PageSignup />)

    const name = getByText('Nome')
    const nickname = getByText('Nickname')
    const email = getByText('Email')
    const senha = getByText('Senha')
    const input1 = getByPlaceholderText('Nome do usuário')
    const input2 = getByPlaceholderText('Nome de cadastro do usuário')
    const input3 = getByPlaceholderText('Email')
    const input4 = getByPlaceholderText('Senha')
    const backButton = getByText(/Voltar/)
    const signupButton = getByText(/Cadastrar/)

    expect(name).toBeInTheDocument()
    expect(nickname).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(senha).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(input3).toBeInTheDocument()
    expect(input4).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
    expect(signupButton).toBeInTheDocument()
  })

  test("Deve aparecer na tela, com o mesmo texto", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouter>
            <PageCreateImage />
        </MemoryRouter>
    )

    const subtitle = getByText('Subtítulo')
    const image = getByText('Imagem')
    const tags = getByText('Tags')
    const collection = getByText('Coleção')
    const description = getByText('Criar Imagem')
    const input1 = getByPlaceholderText('Subtítulo da foto')
    const input2 = getByPlaceholderText('Link da imagem')
    const input3 = getByPlaceholderText('Tags')
    const input4 = getByPlaceholderText('Coleção')
    const sendButton = getByText(/Enviar/)
    const galleryButton = getByText(/Galeria/)

    expect(mockHistoryPush).toHaveBeenCalled()
    expect(description).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(tags).toBeInTheDocument()
    expect(collection).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(input3).toBeInTheDocument()
    expect(input4).toBeInTheDocument()
    expect(sendButton).toBeInTheDocument()
    expect(galleryButton).toBeInTheDocument()
  })

  test("Deve aparecer na tela, com o mesmo texto", () => {
    const { getByText } = render(
        <MemoryRouter>
            <PageAllImages />
        </MemoryRouter>
    )

    const text = getByText('Você não possui nenhuma imagem ainda')

    expect(mockHistoryPush).toHaveBeenCalled()
    expect(text).toBeInTheDocument()
  })
})

describe("Exibição das fotos na página", () => {
    test("Deve aparecer na tela, com o mesmo texto", async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: {message: [
                    {
                        id: '1',
                        file: 'https://picsum.photos/200/300',
                        subtitle: 'Teste 1'
                    }
                ]}
        })

        const { findByText } = render(<PageAllImages />)

        const image = await findByText(/Teste 1/)
        expect(image).toBeInTheDocument()

        expect(axios.get).toHaveBeenCalled()
    })
})

describe("Cadastro de um usuário", () => {
    test("Deve cadastrar um usuário com sucesso", async () => {
        axios.post = jest.fn().mockResolvedValue()

        const { getByPlaceholderText, getByText } = render(<PageSignup />)

        const input1 = getByPlaceholderText('Nome do usuário')
        const input2 = getByPlaceholderText('Nome de cadastro do usuário')
        const input3 = getByPlaceholderText('Email')
        const input4 = getByPlaceholderText('Senha')
        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()
        expect(input3).toBeInTheDocument()
        expect(input4).toBeInTheDocument()

        const button = getByText(/Cadastrar/)
        expect(button).toBeInTheDocument()

        fireEvent.change(input1, {
            target: {
                value: 'User 1'
            }
        })

        fireEvent.change(input2, {
            target: {
                value: 'user1'
            }
        })

        fireEvent.change(input3, {
            target: {
                value: 'user1@email.com'
            }
        })

        fireEvent.change(input4, {
            target: {
                value: '123456'
            }
        })

        fireEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://labeimage.herokuapp.com/user/signup', {
            name: "User 1",
            email: "user1@email.com",
            nickname: "user1",
            password: "123456"
        })
    })
})

describe("Login de um usuário", () => {
    test("Deve logar um usuário com sucesso", async () => {
        axios.post = jest.fn().mockResolvedValue()

        const { getByTestId, getByText } = render(<PageLogin />)

        const input1 = getByTestId('email')
        const input2 = getByTestId('password')
        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()

        const button = getByText(/LOGIN/)
        expect(button).toBeInTheDocument()

        fireEvent.change(input1, {
            target: {
                value: 'user1@email.com'
            }
        })

        fireEvent.change(input2, {
            target: {
                value: '123456'
            }
        })

        fireEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://labeimage.herokuapp.com/user/login', {
            email: "user1@email.com",
            password: "123456"
        })
    })
})

describe("Cadastro de uma imagem", () => {
    test("Deve cadastrar uma imagem com sucesso", async () => {
        axios.post = jest.fn().mockResolvedValue()

        const { getByPlaceholderText, getByText } = render(<PageCreateImage />)

        const input1 = getByPlaceholderText('Subtítulo da foto')
        const input2 = getByPlaceholderText('Link da imagem')
        const input3 = getByPlaceholderText('Tags')
        const input4 = getByPlaceholderText('Coleção')
        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()
        expect(input3).toBeInTheDocument()
        expect(input4).toBeInTheDocument()

        const button = getByText(/Enviar/)
        expect(button).toBeInTheDocument()

        fireEvent.change(input1, {
            target: {
                value: 'Test 1'
            }
        })

        fireEvent.change(input2, {
            target: {
                value: 'https://picsum.photos/200/300'
            }
        })

        fireEvent.change(input3, {
            target: {
                value: 'Tag1, Tag2'
            }
        })

        fireEvent.change(input4, {
            target: {
                value: 'Collection'
            }
        })

        fireEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://labeimage.herokuapp.com/image/createimage', {
            subtitle: "Test 1",
            file: "https://picsum.photos/200/300",
            tags: "Tag1, Tag2",
            collection: "Collection"
        }, {headers: {Authorization: null}})
    })
})