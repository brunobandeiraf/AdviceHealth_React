import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; // fundo
    color: ${({ theme }) => theme.COLORS.GRAY_300}; // icone

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.BLACK}; // Texto
        background: transparent;
        border: 0;

        // div > input:placeholder
        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }    
    }

    > svg {
            margin-left: 16px;
    }
`;