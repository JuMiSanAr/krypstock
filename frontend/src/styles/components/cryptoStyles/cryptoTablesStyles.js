import styled from 'styled-components';
import {
    darkTheme,
    lightTheme,
    allTheme,
    fontSize,
} from "../../Themes";

export const Table = styled.table `
    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    /* border-width: 2px; */
    /* border-style: solid; */
    color: ${({ theme }) => theme === lightTheme ?lightTheme.text : darkTheme.text};;
    height: 260px;
    margin-top: 1rem;

    .change {
        white-space: nowrap;
    }


    .clickCrypto{
        cursor: pointer;
    }
    
    thead{
        background: ${props => props.id === 'crypto-trendy' ? allTheme.yellowGradient : props.id === "trans-history" ? allTheme.turquoiseGradient : props.id === 'crypto-worst' ? allTheme.orangeGradient : allTheme.blueGradient};
        /* border-bottom: 1px solid #ffcc00; */
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        tr{
            height: 60px;
        }
    }

    tbody tr{
        height: 50px;
        :nth-child(2n) {
            background: ${({ theme }) => theme === lightTheme ? darkTheme.secondBackground : lightTheme.secondBackground};;
        }
    }

    tbody td{
        text-align: left;
        padding-left: 1.5rem;
        font-size: ${fontSize.fontSizeS}
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