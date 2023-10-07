import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

// Responsável pelo contexto e entendimento se usuário está logado
import { useAuth } from '../../hooks/auth'

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    // Passando o contexto de autenticação das rotas
    const { signIn }  = useAuth()
    
    const navigate = useNavigate()
    function handleSignIn(){
        signIn({email, password})
    }

    return (
        <Container>
            <Form>
                <h1>Advice Health</h1>
                <p>Aplicação para gerenciar consultas médicas</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/> 

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            < Background />
        </Container>
    )
}