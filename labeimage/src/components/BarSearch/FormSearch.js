import React from 'react'
import { Form, ContainerSearch, ButtonSearch, InputSearch } from './StyleBarSearch'

function FormSearch(props) {
    return (
                <Form onSubmit={props.handleSave}>
                    <ContainerSearch>
                        <InputSearch data-testid="name" 
                            name="name" 
                            type="text" 
                            value={props.form.name} 
                            onChange={props.handleInputChange}
                            placeholder={"Nome do usuário que deseja buscar"}
                            required 
                        />
                        <ButtonSearch>Buscar</ButtonSearch>
                    </ContainerSearch>
                </Form>
    )
}

export default FormSearch