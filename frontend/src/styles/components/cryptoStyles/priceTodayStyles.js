import styled from 'styled-components';
import {darkTheme, lightTheme} from "../../Themes";

export const Table = styled.table`
    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    border-width: 2px;
    border-style: solid;
    color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text};;
    thead{
        background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body};
        border-bottom: 1px solid #ffcc00;
        tr{
            height: 60px;
        }
    }
    tbody tr{
        height: 50px;
    }

    tbody td{
        text-align: center;
        padding: 3px;
    }
`;