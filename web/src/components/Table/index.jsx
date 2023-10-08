import { ImprovisedTable, TitlesTab, TitleTab, TableContent} from './styles'


export function Table(){
    return(
        <ImprovisedTable>
            <TitlesTab>
                <TitleTab>Status</TitleTab>
                <TitleTab>Data</TitleTab>
                <TitleTab>Médico</TitleTab>
                <TitleTab>Paciente</TitleTab>
                <TitleTab>Descrição</TitleTab>
            </TitlesTab>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>09/10/23</TitleTab>
                <TitleTab>Ana Maria</TitleTab>
                <TitleTab>Augusto Saraiva</TitleTab>
                <TitleTab>Reagendar</TitleTab>
            </TableContent>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>13/10/23</TitleTab>
                <TitleTab>Breno Souza</TitleTab>
                <TitleTab>Pedro Alves</TitleTab>
                <TitleTab>Solicitar 2º via</TitleTab>
            </TableContent>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>14/10/23</TitleTab>
                <TitleTab>Breno Souza</TitleTab>
                <TitleTab>Bruno Mendes</TitleTab>
                <TitleTab>Cancelar cirurgia</TitleTab>
            </TableContent>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>14/10/23</TitleTab>
                <TitleTab>Carlos Amaral</TitleTab>
                <TitleTab>João Freitas</TitleTab>
                <TitleTab>Reagendar</TitleTab>
            </TableContent>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>16/10/23</TitleTab>
                <TitleTab>Carlos Amaral</TitleTab>
                <TitleTab>Pedro Matias</TitleTab>
                <TitleTab>Consultar melhora</TitleTab>
            </TableContent>
            <TableContent>
                <TitleTab>
                    <input type="checkbox"/> 
                </TitleTab>
                <TitleTab>16/10/23</TitleTab>
                <TitleTab>Daniel Gonzaga</TitleTab>
                <TitleTab>Pedro Matias</TitleTab>
                <TitleTab>Cancelar cirurgia</TitleTab>
            </TableContent>
        </ImprovisedTable>
    )
}