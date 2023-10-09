import { ImprovisedTable, TitlesTab, TitleTab, TableContent} from './styles'
import { useState, useEffect } from 'react'

export function Table(){

    const [notes, setNotes] = useState([
        {
            id: 1,
            data: "09/10/23",
            doctor: "Ana Maria",
            patient: "Augusto Saraiva",
            description: "Reagendar",
            selected: false
        },
        {
            id: 2,
            data: "13/10/23",
            doctor: "Breno Souza",
            patient: "Pedro Alves",
            description: "Solicitar 2º via",
            selected: false
        },
        {
            id: 3,
            data: "14/10/23",
            doctor: "Breno Souza",
            patient: "Bruno Mendes",
            description: "Cancelar cirurgia",
            selected: false
        },
        {
            id: 4,
            data: "14/10/23",
            doctor: "Carlos Amaral",
            patient: "João Freitas",
            description: "Reagendar",
            selected: false
        },
        {
            id: 5,
            data: "16/10/23",
            doctor: "Carlos Amaral",
            patient: "Pedro Matias",
            description: "Consultar melhora",
            selected: false
        },
        {
            id: 6,
            data: "16/10/23",
            doctor: "Daniel Gonzaga",
            patient: "Pedro Matias",
            description: "Cancelar cirurgia",
            selected: false
        },
        {
            id: 7,
            data: "16/10/23",
            doctor: "Daniel Gonzaga",
            patient: "Pedro Matias",
            description: "Cancelar cirurgia",
            selected: false
        }
    ]);

    const handleCheckboxChange = (id) => {
        const novosItens = notes.map((item) => {
          if (item.id === id) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        setNotes(novosItens);
    };

    return(
        <ImprovisedTable>
            <TitlesTab>
                <TitleTab>Status</TitleTab>
                <TitleTab>Data</TitleTab>
                <TitleTab>Médico</TitleTab>
                <TitleTab>Paciente</TitleTab>
                <TitleTab>Descrição</TitleTab>
            </TitlesTab>

            {notes.map((item) => (
                <TableContent key={item.id} checked={item.selected}>
                    <TitleTab>
                        <input 
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => handleCheckboxChange(item.id)}
                        /> 
                    </TitleTab>
                    <TitleTab>{item.data}</TitleTab>
                    <TitleTab>{item.doctor}</TitleTab>
                    <TitleTab>{item.patient}</TitleTab>
                    <TitleTab>{item.description}</TitleTab>
                </TableContent>
            ))} 
        </ImprovisedTable>
    )
}