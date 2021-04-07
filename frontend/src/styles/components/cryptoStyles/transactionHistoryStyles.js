import styled from 'styled-components';
import {darkTheme, lightTheme} from "../../Themes";

export const TableWrapper = styled.table`
     width: 100%;
    border-collapse: collapse;
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
    tbody tr{
        height: 50px;
        :nth-child(2n) {background: #CCC}
    }

    tbody td{
        text-align: center;
        padding: 3px;
    }
`;
