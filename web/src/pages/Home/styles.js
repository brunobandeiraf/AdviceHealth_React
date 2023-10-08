import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu content"
    "menu content"
    "newnote content";
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
`
export const Brand  = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MENU};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.AZUL_900};
    }

`
export const Menu  = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MENU};

    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    a {
        color: ${({ theme }) => theme.COLORS.AZUL_800};
    }

    // Cor gray muda no componente ButtonText
`
export const Content  = styled.div`
    grid-area: content;
    padding: 0 64px; 
    overflow-y: auto; //conteúdo não couber, irá aparecer barra de rolagem

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;

`
export const NewScheduling = styled(Link)`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }

`

export const InnerCont = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    height: 100%;
`

export const LeftCont = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-y: scroll;
    height: calc(100% - 40px);
    padding: 20px;
`
export const RightCont = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-y: scroll;
    height: calc(100% - 40px);
    padding: 20px;
    // Cor de fundo menu da direita
    background-color: ${({ theme }) => theme.COLORS.GRAY_50};
`
export const DefSpace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const TitleDash = styled.h1`
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: bold;
`
export const CardsOut = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    height: 200px;
    position: relative;
`
export const Card = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.AZUL_800};
    height: 100%;

    > header { // div > header
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => theme.COLORS.BLACK};
        margin-top: 10px;
        margin-left: 10px;
    }

    > strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        margin-left: 10px;
    }

`

export const DoubleCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 15px;
`