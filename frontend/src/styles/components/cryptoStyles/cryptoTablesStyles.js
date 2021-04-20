import styled from 'styled-components';
import {
    darkTheme,
    lightTheme,
    allTheme,
    fontSize,
} from "../../Themes";

export const Table = styled.table `
    /* * {
        border: solid 1px red;
    } */

    width: 100%;
    border-collapse: collapse;
    color: ${({ theme }) => theme === lightTheme ?lightTheme.text : darkTheme.text};;
    height: 260px;
    margin-top: 1rem;
    table-layout: fixed;

    .clickCrypto{
        cursor: pointer;
    }
    
    thead{
        background: ${props => props.id === 'crypto-trendy' ? allTheme.yellowGradient : props.id === "trans-history" ? allTheme.turquoiseGradient : props.id === 'crypto-worst' ? allTheme.orangeGradient : allTheme.blueGradient};
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        tr{
            height: 60px;
        }
    }

    tbody tr{
        height: 35px;
        :nth-child(2n) {
            background: ${({ theme }) => theme === lightTheme ? darkTheme.secondBackground : lightTheme.secondBackground};;
        }
    }

    tbody td{
        text-align: center;
        font-size: ${fontSize.fontSizeS}
    }

    .tdDiv {
        width: 50%;
        text-align: left;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivVolume {
        width: 50%;
        text-align: right;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivTransacPrice {
        width: 65%;
        text-align: right;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivType {
        width: 40%;
        text-align: left;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivDate {
        width: 70%;
        text-align: left;
        display: inline-block;
        white-space: nowrap;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 6px;
    }

    tr:first-child th:last-child {
        border-top-right-radius: 6px;
    }

    tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
    }

    tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
    }
`;