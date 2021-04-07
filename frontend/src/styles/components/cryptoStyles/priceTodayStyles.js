import styled from 'styled-components';
import {darkTheme, lightTheme} from "../../Themes";

export const Table = styled.table`
    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    /* border-width: 2px;
    border-style: solid; */
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
    thead{
        background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body};
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text };
        border-bottom: 1px solid #ffcc00;
        tr{
            height: 60px;
        }
    }
    tbody tr{
        height: 50px;
        :nth-child(2n) {background: #CCC}
    }

    tbody td{
        text-align: center;
        padding: 3px;
    }
`;