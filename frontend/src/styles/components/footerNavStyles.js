import styled from "styled-components";
import {darkTheme, lightTheme} from "../../styles/Themes";

export const FooterWrapper = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 100vw;
    z-index: 2;
    background: ${({ theme }) => theme === lightTheme ? lightTheme.footerBackground : darkTheme.footerBackground};

    * {
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text : lightTheme.text};
        
        :hover {
            cursor: pointer;
        }
    }

    @media (min-width: 450px) {
        display: none;
    }
`