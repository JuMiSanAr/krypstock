import {
    darkTheme,
    lightTheme
} from "../../Themes";
import styled from 'styled-components';


export const FormSelectWrapper = styled.div `
   display: flex;
   justify-content: space-between;
    align-items: center;

    /* border: solid 1px red;
    * {
        border: solid 1px red;
    } */
    input {
        padding-left: 1rem;
        height: 20px;
    }

   .selector{
     border-style: none;
     border-radius: 5px;
     width: 90px;
     height: 28px;
     color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text};
     background:${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body};
    :focus {
        outline: none;
    }
   }
`;


export const CryptoWrapper = styled.div `
   display: flex;
   justify-content: flex-end;
   width:100%
   ;
   input{
   margin-left:10px;
   margin-right:10px;
   }
`;

export const ButtonWrapper = styled.div `
    display: flex;
    justify-content:flex-end;
    
    button{
        background-color: #6418C3;
        text-transform: uppercase;
        font-weight: 600;
        height: 30px;
        width: 90px;
        border-radius: 10px;
        border: none;
        color: white;
        margin-bottom:10px;
    }
`;

export const GraphWrapper = styled.div `  
    display: flex;
    justify-content: center;
    margin-top: 70px;
    overflow: hidden;
`;