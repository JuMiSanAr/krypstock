import styled from 'styled-components';
import {
    darkTheme,
    lightTheme,
    allTheme
} from "../../Themes";

export const StockTable = styled.table `
    /* * {
        border: solid 1px red;
    } */

    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};;
    height: 260px;
    margin-top: 1rem;

    .clickStock{
        cursor: pointer;
    }

    thead{
        background: ${props => props.id === 'trendy-stocks' ? allTheme.yellowGradient : props.id === "transaction-history" ? allTheme.turquoiseGradient : props.id === "loss-stocks" ? allTheme.orangeGradient : allTheme.blueGradient};
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};

        tr{
            height: 60px;
            /* display: block; */
        }
    }

    tbody{
        /* display:block; */
        width: 100%;
        /* overflow-y: auto; */
        height: 200px;

        /* -ms-overflow-style: none;  
        scrollbar-width: none;  
        ::-webkit-scrollbar { 
        display: none;
        } */
    }

    tbody tr{
        height: 50px;
        /* display: block; */
        :nth-child(2n) {
            background: ${({ theme }) => theme === lightTheme ? darkTheme.secondBackground : lightTheme.secondBackground};;
        }
    }

    tbody tr td{
        text-align: center;
        padding: 3px;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 15px;
    }

    tr:first-child th:last-child {
        border-top-right-radius: 15px;
    }

    tr:last-child td:first-child {
    border-bottom-left-radius: 15px;
    }

    tr:last-child td:last-child {
    border-bottom-right-radius: 15px;
    }
`;