import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Content, Title, NewScheduling, InnerCont, LeftCont, Doctors, RightCont, TimeAdd, TimeIn, Symbol } from './styles'

// container, brand
import { useNavigate, Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { PersonItem } from '../../components/PersonItem'
import { CalendarC } from '../../components/CalendarC'

export function Schedule(){

    const navigate = useNavigate()

    const doctors = [
        {
            name: "Dra. Ana Maria",
            specialty: "Ortopedista"
        },
        {
            name: "Dr. Breno Souza",
            specialty: "Clínico Geral"
        },
        {
            name: "Dr. Carlos Amaral",
            specialty: "Ginecologista"
        },
        {
            name: "Dr. Daniel Gonzaga",
            specialty: "Pediatra"
        },
        {
            name: "Dra. Heloisa Rodolfo",
            specialty: "Ginecologista"
        },
        {
            name: "Dr. Jesus Eith",
            specialty: "Cardiologista"
        },

    ]

    const availableTimes = [
        {time: "8:00"},
        {time: "8:30"},
        {time: "9:00"},
        {time: "9:30"},
        {time: "11:00"},
        {time: "11:30"},
        {time: "12:00"},
        {time: "14:00"},
        {time: "14:30"},
        {time: "15:00"},
        {time: "15:30"},
        {time: "16:00"},
        {time: "16:30"},
        {time: "17:30"},
        {time: "18:00"},
        {time: "18:30"},
        {time: "19:00"},
        {time: "19:30"},
        {time: "20:00"},
    ]

    return(
        <Container>
            <Brand> 
                <h1>Advice Health</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/schedule"><strong>Agendamento</strong></Link>
                </li>
                <li>
                    <Link to="/appointment">Consultas</Link>
                </li>
                
            </Menu>

            <Content>
                <InnerCont>
                    <LeftCont>
                        <Title>MÉDICOS</Title>
                            <Doctors>
                                {
                                    doctors.map((e, i) => {
                                        return <PersonItem key={i} name={e.name} information={e.specialty}/>
                                    })
                                }
                            </Doctors>
                        <CalendarC/>
                    </LeftCont>

                    <RightCont>
                        <Title>09/Out. 2023</Title>
                        <TimeAdd>
                            {
                                availableTimes.map((e, i) => {
                                    return <TimeIn key={i}>
                                                <span> { e.time } </span>
                                                <Symbol>+</Symbol>
                                            </TimeIn> 
                                })
                            }
                        </TimeAdd>
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