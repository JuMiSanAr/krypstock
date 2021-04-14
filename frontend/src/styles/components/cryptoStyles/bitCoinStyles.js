import {darkTheme, lightTheme} from "../../Themes";
import styled from 'styled-components';


export const FormSelectWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   .selector{
     border-style: none;
     border-radius: 5px;
     width: 65px;
     height: 28px;
     color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text};
     background:${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body};
    :focus {
        outline: none;
        }
   }
`;

export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GraphWrapper = styled.div`  
    display: flex;
    justify-content: center;
    margin-top: 70px;
    overflow: hidden;
`;
