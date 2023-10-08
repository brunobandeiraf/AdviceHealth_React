import { CalendarCont, CalendarConf } from './styles'
import Calendar from 'react-calendar'

export function CalendarC(){
    return (
        <CalendarConf>
            <CalendarCont>
                <Calendar locale="pt-br"/>
            </CalendarCont>
        </CalendarConf>
    )
}