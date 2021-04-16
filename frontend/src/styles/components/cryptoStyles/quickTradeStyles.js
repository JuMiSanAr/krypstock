import styled from "styled-components";
import { allTheme } from "../../Themes";

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

    /* * {border: solid 1px red;} */
    .transacItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .amountInput{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 55px;
        
        input{
            width: 80px;
            height: 25px;
            text-align: center;
            outline: none;
        }

        select{
            width: 120px;
            height: 25px;
            text-align: center;
            outline: none;
            /* margin-bottom: 1rem; */
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content:flex-end;
    button{
        background-color: ${allTheme.purple};
        text-transform: uppercase;
        font-weight: 600;
        height: 30px;
        width: 90px;
        border-radius: 10px;
        border: none;
        color: white;
    }
`;
