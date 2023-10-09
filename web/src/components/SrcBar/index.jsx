import { OutSrc, InputBar, Lupa} from './styles'

export function SrcBar({ text, btn }){

    const executarFuncao = () => {
        // Chama a função passada como parâmetro
        props.handleInputChange();
    };


    return (
        <OutSrc>
            <InputBar placeholder={text} onChange={executarFuncao} />
            <Lupa>{btn}</Lupa>
        </OutSrc>
    )
}