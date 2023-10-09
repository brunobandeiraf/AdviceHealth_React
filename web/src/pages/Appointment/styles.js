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

    strong {
        color: ${({ theme }) => theme.COLORS.WHITE};
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
    justify-content: flex-start;
    //align-items: center;
    //gap: 20px;
    //justify-content: space-between;
    height: 100%;
    padding: 20px;

    //background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const DefSpace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`

export const TransactionsContainer = styled.main`
    width: 100%;
    //max-width: 1120px;
    //margin: 4rem auto 0;
    padding: 0 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    overflow-y: scroll;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate; // Separação entre as linhas 
    border-spacing: 0 0.5rem; // Libera após o uso do collapse
    margin-top: 1.5rem;

    
    color: ${({ theme }) => theme.COLORS.BLACK};

    tr:first-child {// Primeiro tr
        td {
            background: ${({ theme }) => theme.COLORS.GRAY_100};
            color: ${({ theme }) => theme.COLORS.BLACK};
        }

    }

    td {
        padding: 1.25rem 2rem;
        background: ${({ theme }) => theme.COLORS.WHITE};
        
        &:first-child { // Primeira td
            background: ${({ theme }) => theme.COLORS.WHITE};
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child { // Último td
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

export const Symbol = styled.div`
    width: 20px;
    color: white;
    aspect-ratio: 1;
    background: ${({ theme }) => theme.COLORS.AZUL_900};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    bottom: 10px;
`

export const Input = styled.input`
    width: calc(100% - 30px);
    background: ${({ theme }) => theme.COLORS.GREY_100};
    height: 30px;
    padding: 10px 15px;
    color: ${({ theme }) => theme.COLORS.BLACK};
`