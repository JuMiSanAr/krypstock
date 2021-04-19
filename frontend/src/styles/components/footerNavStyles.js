import styled from "styled-components";
import {
    darkTheme,
    lightTheme
} from "../../styles/Themes";

export const FooterWrapper = styled.div `
    /* position: sticky; */
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 100vw;
    background: white;
    z-index: 4;
    /* background: ${({ theme }) => theme === lightTheme ? lightTheme.footerBackground : darkTheme.footerBackground}; */

    * {
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text};
        
        :hover {
            cursor: pointer;
            /* color: white; */
        }
    }
    i{
        font-size: 21px;  
        color: #6419c3;
    }

    @media (min-width: 450px) {
        display: none;
    }
`