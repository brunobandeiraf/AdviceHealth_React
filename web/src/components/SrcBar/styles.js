import styled from 'styled-components'

export const OutSrc = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;


`

export const InputBar = styled.input`
    width: calc(100% - 30px);
    background: ${({ theme }) => theme.COLORS.GREY_100};
    height: 30px;
    padding: 5px 15px;
    color: ${({ theme }) => theme.COLORS.BLACK};
`

export const Lupa = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 70px;
    background: ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
`