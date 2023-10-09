import styled from 'styled-components'

export const ImprovisedTable = styled.div`
    width: calc(100% - 4px);
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
`
export const TitlesTab = styled.div`
    display: flex;
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.AZUL_800}; // cor tr
    color: ${({ theme }) => theme.COLORS.BLACK};
`

export const TitleTab = styled.h2`
    width: 100%;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const TableContent = styled.div`
    display: flex;
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    //color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${(props) => (props.checked ? 'gray' : 'black')};
`
