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
    transition: all 1s;

    i{
        font-size: 21px;  
        /* color: ${allTheme.purple}; */
        /* color: white; */

        :hover {
            cursor: pointer;
        }
    }

    .home {
        color: ${props => props.currentPage === '/' ? allTheme.purple : allTheme.lightPurple};
    transition: all 1s;

    }

    .portfolio {
        color: ${props => props.currentPage === '/portfolio-list/' ? allTheme.purple : allTheme.lightPurple}

    }

    .new-transaction {
        color: ${props => props.currentPage === '/new-transaction/' ? allTheme.purple : allTheme.lightPurple};
    }

    .search {
        color: ${props => props.currentPage === '/search/' ? allTheme.purple : allTheme.lightPurple};
    }

    .news {
        color: ${props => props.currentPage === '/news/' ? allTheme.purple : allTheme.lightPurple};
    }

    @media (min-width: 450px) {
        display: none;
    }
`
