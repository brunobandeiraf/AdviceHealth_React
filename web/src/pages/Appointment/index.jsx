import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Content, NewScheduling, InnerCont, TransactionsContainer, TransactionsTable, Symbol, Input } from './styles'

// container, brand
import { useNavigate, Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { SrcBar } from '../../components/SrcBar'

export function Appointment(){

    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([
        { 
            id: 1, 
            data: '02/10/2023',
            doctor: "Dra. Ana Maria",
            pacient: 'Pedro Matias',
            value: 'R$350,00' 
        },
        { 
            id: 2, 
            data: '02/10/2023',
            doctor: "Dr. Breno Souza",
            pacient: 'Augusto Saraiva',
            value: 'R$550,00' 
        },
        { 
            id: 3, 
            data: '03/10/2023',
            doctor: "Dr. Breno Souza",
            pacient: 'João Freitas',
            value: 'R$250,00' 
        },
        { 
            id: 4, 
            data: '04/10/2023',
            doctor: "Dr. Carlos Amaral",
            pacient: 'Bruno Mendes',
            value: 'R$250,00' 
        },
        { 
            id: 5, 
            data: '07/10/2023',
            doctor: "Dr. Daniel Gonzaga",
            pacient: 'Efraim Fereira',
            value: 'R$150,00' 
        },
        { 
            id: 6, 
            data: '07/10/2023',
            doctor: "Dr. Breno Souza",
            pacient: 'Bruno Mendes',
            value: 'R$500,00' 
        },
        { 
            id: 7, 
            data: '09/10/2023',
            doctor: "Dr. Carlos Amaral",
            pacient: 'Bruno Mendes',
            value: 'R$300,00' 
        },
        { 
            id: 8, 
            data: '09/10/2023',
            doctor: "Dra. Ana Maria",
            pacient: 'Bruno Mendes',
            value: 'R$500,00' 
        },
        { 
            id: 9, 
            data: '09/10/2023',
            doctor: "Dra. Ana Maria",
            pacient: 'Bruno Mendes',
            value: 'R$800,00' 
        },
      ]);

    // Estado para o array filtrado
    const [itensFiltrados, setItensFiltrados] = useState([...appointments]); 
    // Inicialmente, os itens filtrados são os mesmos que os originais

    // Função para atualizar o array filtrado com base no texto de pesquisa
    const updateItensFiltrados = (textSearch) => {
        const newItensFiltrados = appointments.filter(
            item => item.doctor.toLowerCase().includes(textSearch.toLowerCase())
        );
        setItensFiltrados(newItensFiltrados);
    };

    const handleInputChange = (e) => {
        const textSearch = e.target.value;
        updateItensFiltrados(textSearch);
    };

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
                    <Link to="/schedule">Agendamento</Link>
                </li>
                <li>
                    <Link to="/appointment"><strong>Consultas</strong></Link>
                </li>
                
            </Menu>

            <Content>
                <InnerCont>
                    
                    <TransactionsContainer>
                        <SrcBar 
                            text="Pesquisar médico" 
                            btn="Buscar"
                            func={handleInputChange}
                        /> 

                        {/* <Input
                            type="text"
                            placeholder="Pesquisar médico..."
                            onChange={handleInputChange}
                        />  */}
                        <TransactionsTable>
                            <tbody>
                                <tr>
                                    <td width="20%">
                                        Data do Atendimento
                                    </td>
                                    <td>
                                        Médico Responsável
                                    </td>
                                    <td>Nome do Paciente</td>
                                    <td>Valor da Consulta</td>
                                </tr>

                                {
                                    itensFiltrados.map((item, i) => {
                                        return <tr key={i}>
                                                <td width="20%">
                                                    { item.data }
                                                </td>
                                                <td>
                                                    { item.doctor }
                                                </td>
                                                <td>
                                                    { item.pacient }
                                                </td>
                                                <td>
                                                    { item.value }
                                                    <Symbol>+</Symbol>
                                                    <Symbol>+</Symbol>
                                                </td>
                                            </tr>
                                    })
                                }


                                
                            </tbody>
                        </TransactionsTable>
                    </TransactionsContainer>


                </InnerCont>
            </Content>

          
            <NewScheduling to="/new">
                <FiPlus/>
                Criar Agendamento
            </NewScheduling>
        </Container>
    )
}