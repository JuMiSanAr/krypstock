import styled from "styled-components";
import {
    allTheme
} from "../../Themes";

export const SelectorWrapper = styled.div `
    display:flex;
    .buySell{
        margin-right: 20px;
    }
`;


export const TransacWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 15px;

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

export const ButtonWrapper = styled.div `
    display: flex;
    justify-content:flex-end;
    button{
        text-transform: uppercase;
        font-weight: 600;
        height: 30px;
        width: 90px;
        border-radius: 10px;
        border: none;
        color: white;
    }

    .buy{
        background-color: ${allTheme.greenBuy};
        :focus {
            outline: none;
        }
        :hover {
            cursor: pointer;
        }
    }

    .sell{
        background-color: ${allTheme.redSell};
        :focus {
            outline: none;
        }
        :hover {
            cursor: pointer;
        }
    }
`

export const BuySellSelectorWrapper = styled(SelectorWrapper)
`
    border-radius: 11px;
    width: 35%;
    border: solid 1px ${allTheme.gray};
    * {
        border: solid 1px red;
    }
`

export const BuySelectButton = styled.button`
    width: 50%;
    height: 2.25rem;
    border-radius: ${props => props.buySell === "B" ? '10px 10px 10px 10px' : '10px 0 0 10px'};
    border: ${props => props.buySell === "B" ? `solid 1.5px ${allTheme.greenBuy}` : `none`};
    background: transparent;
    color: white;

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
    }
`

export const SellSelectButton = styled(BuySelectButton)
`
    border-radius: ${props => props.buySell === "S" ? '10px 10px 10px 10px' : '0 10px 10px 0'};
    border: ${props => props.buySell === "S" ? `solid 1.5px ${allTheme.redSell}` : `none`};

    :focus {
        outline: none;
    }

`