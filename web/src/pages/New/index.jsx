import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonText } from "../../components/ButtonText"
import { Textarea } from '../../components/Textarea'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import { Container, Form } from './styles'

export function New() {

    const navigate = useNavigate() // Responsável por direcionar o usuário

    function handleBack() {
        navigate(-1)
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Agendamento</h1>
                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input
                        placeholder="Data do Atendimento"
                    />

                    <Input
                        placeholder="Médico Responsável"
                    />

                    <Input
                        placeholder="Nome do Paciente"
                    />

                    <Input
                        placeholder="Valor da Consulta"
                    />

                    <Textarea
                        placeholder="Observações"
                    />

                    <Button
                        title="Salvar"
                    />
                </Form>
            </main>
        </Container>
    )
}