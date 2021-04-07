import styled from "styled-components";
import {lightTheme, darkTheme} from "../../Themes";

export const FlexDiv = styled.div`
    display: flex;
`

export const NewsWrapper = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
     
    a {
        text-decoration: none;
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        :hover {
            cursor: pointer;
        }
    }

    .source {
        font-size: 0.8rem;
        margin-bottom: 1em;
    }    
`