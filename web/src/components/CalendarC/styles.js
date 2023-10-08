import styled from 'styled-components'

export const CalendarCont = styled.div`
  /* ~~~ container styles ~~~ */
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    gap: 5px;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  abbr{
    color: white;
  }

  button {
    // Cor de fundo segundário
    background-color: #00000000; 
    border: 0;
    border-radius: 3px;
    color:  ${({ theme }) => theme.COLORS.BLACK}; // mês
    padding: 5px 0;
    font-size: 15px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    &:active {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`

export const CalendarConf = styled.div`
    width: 100%;
    height: 300px;
    background: ${({ theme }) => theme.COLORS.AZUL_800};
`