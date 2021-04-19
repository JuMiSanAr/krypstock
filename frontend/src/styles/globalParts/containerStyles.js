import styled from "styled-components";
import linebackground from '../../assets/blue-gradient-sense-line.png'
import {
    darkTheme,
    lightTheme
} from "../Themes";


export const AllComponentsWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    /* * {
        border: solid 1px red;
    }  */
`

export const FullWidthComponentWrapper = styled.div `
    width: 90%;
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

    /* *{
        border: solid 1px red;
    } */

    .portfolioDescripTitle{
        word-break: break-all;
    }

    .empty {
        min-height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .create-portfolio {
            /* text-decoration: none; */
            color: white;
            :hover {
                font-weight: bold;
                cursor: pointer;
            }
        }
    }

    .title {
        display: flex;
        align-items: center;
    }

    @media (min-width: 450px) {
        width: 40%;
    }
`

export const ShrinkingComponentWrapperNoBackground = styled(FullWidthComponentWrapper)
`
    @media (min-width: 450px) {
        width: 40%;
        background-color: transparent; 
    }
`

export const PageWrapper = styled.div `
    margin-bottom: 60px; 

    @media (min-width: 450px) {
        margin-bottom: 0px;
    }
`

export const PortfolioShrinkingWrapper = styled(FullWidthComponentWrapper)`
        /* background-color: #00DBDE;
        background-image: url('https://res.cloudinary.com/tennam/image/upload/v1618750810/Propulsion/Pngtree_blue_gradient_sense_line_4050648.png'), linear-gradient( 179.4deg,  rgba(33,150,243,1) 1.8%, rgba(22,255,245,0.60) 97.1% ); */
        /* background-image: url(${linebackground});
        background-repeat: no-repeat;
        background-size: cover; */

    .portfolioDescripTitle{
        word-break: break-all;
    }

    .title {
        display: flex;
        align-items: center;
    }
    @media (min-width: 450px) {
        width: 40%;
    }

    @media only screen and (max-width: 600px) and (min-width: 320px) { 
        background-image: url(${linebackground});
        background-repeat: no-repeat;
        background-size: cover;
    }
`;