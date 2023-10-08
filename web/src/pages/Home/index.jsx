import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Content, NewScheduling, InnerCont, LeftCont, RightCont, DefSpace, TitleDash, CardsOut, Card, DoubleCards} from './styles'

// container, brand
import { useNavigate, Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { PersonItem } from '../../components/PersonItem'
import { CalendarC } from '../../components/CalendarC'
import { SrcBar } from '../../components/SrcBar'

export function Home(){

    const navigate = useNavigate()


    return(
        <Container>
            <Brand> 
                <h1>Advice Health</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <Link to="/new">Home</Link>
                </li>
                <li>
                    <Link to="/new">Agendamento</Link>
                </li>
                <li>
                    <Link to="/new">Consultas</Link>
                </li>
                
            </Menu>

            <Content>
                <InnerCont>
                    <LeftCont>
                        
                        <SrcBar/>
                        
                        <DefSpace>
                            <TitleDash>DASHBOARD</TitleDash>

                            <CardsOut>
                                <Card/>
                                <DoubleCards>
                                    <Card>
                                        <header>
                                            <span>Faturamento do mês:</span>
                                        </header>
                                        <strong>R$ 3.720.400</strong>
                                    </Card>
                                    <Card>
                                        <header>
                                            <span>Total de Atendimentos:</span>
                                        </header>
                                        <strong>12.400</strong>
                                    </Card>
                                </DoubleCards>
                            </CardsOut>
                        </DefSpace>

                        <DefSpace>
                            <TitleDash>AVISOS/LEMBRETES</TitleDash>
                            <Table/>
                        </DefSpace>
                    </LeftCont>

                    <RightCont>
                        <CalendarC/>
                        <PersonItem name="Ana Maria" information="Ortopedista"></PersonItem>
                        <PersonItem name="Breno Souza" information="Pediatra"></PersonItem>
                        <PersonItem name="Carlos Amaral" information="Clínico Geral"></PersonItem>
                        <PersonItem name="Daniel Gonzaga" information="Ginecologista"></PersonItem>
                    </RightCont>
                </InnerCont>


            </Content>

          
            <NewScheduling to="/new">
                <FiPlus/>
                Criar Agendamento
            </NewScheduling>
        </Container>
    )
}