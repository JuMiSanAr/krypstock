import styled from "styled-components";

export const SelectorWrapper = styled.div`
    display:flex;
    .buySell{
        margin-right: 20px;
    }
`;

export const TransacWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 30px;
    .transacItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .amountInput{
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            width: 80px;
            height: 25px;
            text-align: center;
            outline: none;
        }
    }

`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content:flex-end;
    button{
        background-color: #6418C3;
        text-transform: uppercase;
        font-weight: 600;
        height: 30px;
        width: 90px;
        border-radius: 10px;
        border: none;
        color: white;
    }
`;
