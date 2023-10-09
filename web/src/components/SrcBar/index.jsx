import { OutSrc, InputBar, Lupa} from './styles'

export function SrcBar({ text, btn, func }){

    return (
        <OutSrc>
            <InputBar placeholder={text} onChange={(e) => func(e)} />
            <Lupa>{btn}</Lupa>
        </OutSrc>
    )
}