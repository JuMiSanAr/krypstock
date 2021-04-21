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
    z-index: 4;
    /* background: ${({ theme }) => theme === lightTheme ? lightTheme.footerBackground : darkTheme.footerBackground}; */

    i{
        font-size: 21px;  
        /* color: ${allTheme.purple}; */
        /* color: white; */
        /* transition: al 0.4s; */

        :hover {
            cursor: pointer;
        }
    }

    .home {
        color: ${props => props.currentPage === '/' ? allTheme.purple : 'lightgray'};
    }

    .portfolio {
        color: ${props => props.currentPage === '/portfolio-list/' ? allTheme.purple : 'lightgray'}

    }

    .add-remove {
        color: ${props => props.currentPage === '/add-remove/' ? allTheme.purple : 'lightgray'};
    }

    .search {
        color: ${props => props.currentPage === '/search/' ? allTheme.purple : 'lightgray'};
    }

    .news {
        color: ${props => props.currentPage === '/news/' ? allTheme.purple : 'lightgray'};
    }

    @media (min-width: 450px) {
        display: none;
    }
`
