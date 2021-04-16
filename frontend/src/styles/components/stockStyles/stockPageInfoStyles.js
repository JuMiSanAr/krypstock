import styled from "styled-components";
import {
    allTheme,
    darkTheme,
    lightTheme
} from "../../Themes";

export const StockPageInfoWrapper = styled.table `
    /* * {
        border: solid 1px red;
    } */

    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};;
    /* overflow-y: scroll; */
    height: 260px;
    /* display: block; */
    /* table-layout: fixed; */

    thead{
        background: ${props => props.id === 'trendy-stocks' ? allTheme.orangeGradient : props.id === "transaction-history" ? allTheme.turquoiseGradient : allTheme.greenGradient};
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};

        tr{
            height: 60px;
            /* display: block; */
        }
    }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        :hover {
            cursor: pointer;
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
    
    .key {
        font-weight: bold;
    }
`;