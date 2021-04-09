import styled from "styled-components";
import {darkTheme, lightTheme} from "../Themes";

export const AllComponentsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    //  * {
    //     border: solid 1px red;
    // } 
`

export const FullWidthComponentWrapper = styled.div`
    width: 90%;
    /* height: 350px; */
    /* dont forget to change the height */
    border-radius: 15px;
    margin: 1rem; 
    background: ${({ theme }) => theme === lightTheme ? lightTheme.background : darkTheme.background};
    padding: 1.5rem;

    h3 {
        margin-top: 0;
        margin-bottom: 0.8em;
    }

    img {
        width: 80%;     
    }
`


export const ShrinkingComponentWrapper = styled(FullWidthComponentWrapper)`
    @media (min-width: 450px) {
        width: 40%;
    }
`
