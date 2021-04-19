import styled from "styled-components";
import {
    darkTheme,
    lightTheme,
    allTheme
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
    /* background: ${({ theme }) => theme === lightTheme ? lightTheme.footerBackground : darkTheme.footerBackground}; */

    i{
        font-size: 21px;  
        color: ${allTheme.purple};
        :hover {
            cursor: pointer;
        }
    }

    @media (min-width: 450px) {
        display: none;
    }
`