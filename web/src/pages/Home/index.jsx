import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Content, NewScheduling, InnerCont, LeftCont, Doctors, RightCont, DefSpace, TitleDash, CardsOut, Card, DoubleCards} from './styles'

// container, brand
import { useNavigate, Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { PersonItem } from '../../components/PersonItem'
import { CalendarC } from '../../components/CalendarC'
import { SrcBar } from '../../components/SrcBar'

export function Home(){

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

    // const [eventos, setEventos] = useState([
    //     { id: 1, data: '2023-10-08', descricao: 'Evento 1' },
    //     { id: 2, data: '2023-10-08', descricao: 'Evento 1' },
    //     { id: 3, data: '2023-10-08', descricao: 'Evento 1' },
    //     { id: 4, data: '2023-10-07', descricao: 'Evento 2' },
    //     { id: 5, data: '2023-10-06', descricao: 'Evento 3' },
    //     { id: 6, data: '2023-10-05', descricao: 'Evento 4' },
    //     // Adicione mais eventos conforme necessário
    //   ]);
    //   const [eventosFiltrados, setEventosFiltrados] = useState([]); 
    //   // Estado para armazenar eventos filtrados

    //   const handleDiaClicado = (dia) => {
    //     // Filtra os eventos com base na data clicada
    //     console.log("Dia: "+dia)
    //     const eventosDoDia = eventos.filter(evento => evento.data === dia.dateString);
    //     setEventosFiltrados(eventosDoDia);
    //     console.log(eventosDoDia)
    //   };

    return(
        <Container>
            <Brand> 
                <h1>Advice Health</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <Link to="/"><strong>Home</strong></Link>
                </li>
                <li>
                    <Link to="/schedule">Agendamento</Link>
                </li>
                <li>
                    <Link to="/appointment">Consultas</Link>
                </li>
                
            </Menu>

            <Content>
                <InnerCont>
                    <LeftCont>



                        {/* 
                            // Testes para capturar o dia do calendário

                            <CalendarC
                            onDayPress={(day) => handleDiaClicado(day)}
                            // Outras configurações do calendário, como markedDates
                        />

                        <Teste>
                            <h1>Eventos do Dia:</h1>
                            <ul>
                                <li>
                                    09/10/2023
                                </li>
                            {
                                eventosFiltrados.map((evento) => (
                                    <li key={evento.id}>
                                        {evento.data} - {evento.descricao}
                                    </li>
                                ))
                            }
                            </ul>
                        </Teste> */}
                    

                        <SrcBar text="Buscar" btn="Buscar" />
                        
                        <DefSpace>
                            <TitleDash>DASHBOARD</TitleDash>

                            <CardsOut>
                                <Card>
                                    <header>
                                        <span>Colaboradores:</span>
                                    </header>
                                    <strong>1.120</strong>
                                    <header>
                                        <span>Pacientes:</span>
                                    </header>
                                    <strong>1.720</strong>
                                </Card>
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
                        <Doctors>
                            {
                                doctors.map((e, i) => {
                                    return <PersonItem key={i} name={e.name} information={e.specialty}/>
                                })
                            }
                        </Doctors>
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