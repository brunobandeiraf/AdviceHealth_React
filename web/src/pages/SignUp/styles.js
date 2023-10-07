import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.AZUL_900};
    }

    > h2  {
        font-size: 24px;
        margin: 48px 0;
        color: ${({ theme }) => theme.COLORS.AZUL_800};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.AZUL_800};
    }
`;

export const Background = styled.div`
    flex: 1; // ocupar todo o espaço da região
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover; // preencher todo o espaço
`;