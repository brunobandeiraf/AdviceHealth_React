import styled from 'styled-components'

export const PersonOut = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Person = styled.div`
    width: calc(100% - 10px);
    height: 50px;
    background: ${({ theme }) => theme.COLORS.AZUL_800};
    display: flex;
    gap: 10px;
    padding: 5px;
`
export const ProfOutImg = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`
export const ProfImgAvatar = styled.img`
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    //background: ${({ theme }) => theme.COLORS.BLACK}; // Avatar
    border-radius: 100%;
`
export const CInfOut = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
`

export const NameInf = styled.div`
    height: 15px;
    width: 50%;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 14px;
`
export const PersonInf = styled.div`
    height: 12px;
    width: 30%;
    color: ${({ theme }) => theme.COLORS.GREY_300};
    font-size: 10px;
`