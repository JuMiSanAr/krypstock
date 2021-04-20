import styled from "styled-components";
import {fontSize} from "../Themes";

export const MainContentWrapper = styled.div`
    .content {
        display: none;
    }
    .active-content {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
    }
`;

export const DoubleButtonContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 1rem;
    width: 50%;

    @media (min-width: 450px) {
        height: 3.3rem;
        width: 20%;
    }

    .animation {
        position: absolute;
        height: 100%;
        border-bottom:  solid 3px white;
        top: 0;
        z-index: 0;
        transition: all 0.5s ease 0s;
        left: 0;
    }

    .start-crypto, .left-button:hover~.animation {
        width: 50%;
        left: 0;
    }

    .start-stock, .right-button:hover~.animation {
        width: 50%;
        left: 50%;
    } 

     /* border: solid 1px red;
    * {
        border: solid 1px red;
    } */
`;


export const LeftButton = styled.button`
    position: relative;
    background: transparent;
    text-transform: uppercase;
    font-weight: ${props => props.numberClicked === 1 ? 600 : 1000};
    font-size: ${fontSize.fontSizeDefault};
    height: 45px;
    width: 50%;
    border: none;
    color: ${props => props.numberClicked === 1 ? 'white' : 'lightgray'};
    /* border-bottom: ${props => props.numberClicked === 1 ? 'solid 3px white' : 'none'}; */
    cursor: pointer;
    z-index: 1;
    display: inline-block;

    :hover {
        font-weight: 600;
    }

    :focus {
        outline: none;
    }

    @media (min-width: 450px) {
        height: 3.3rem;
        /* width: 20%; */
}
`;

export const RightButton = styled(LeftButton)`
    /* border-bottom: ${props => props.numberClicked === 1 ? 'none' : 'solid 3px white'}; */
    font-weight: ${props => props.numberClicked === 1 ? 1000 : 600};
    color: ${props => props.numberClicked === 1 ?  'lightgray' : 'white'};
    :hover {
        font-weight: 600;
    }
`

// export const LeftButton = styled.button`
//     background: ${props => props.numberClicked === 1 ? allTheme.purpleGradient : darkTheme.secondBackground};
//     text-transform: uppercase;
//     font-weight: ${props => props.numberClicked === 1 ? 600 : 1000};
//     font-size: 1rem;
//     height: 45px;
//     width: 30%;
//     border: none;
//     /* color: ${props => props.numberClicked === 1 ? '#363537' : 'white'}; */
//     color: ${props => props.numberClicked === 1 ? 'white' : 'lightgray'};
// 
//     cursor: pointer;
//     border-radius: 6px 0 0 6px;
// 
//     :focus {
//         outline: none;
//     }
// 
//     @media (min-width: 450px) {
//         height: 3.3rem;
// }
// `;
// 
// export const RightButton = styled(LeftButton)`
//     /* background: ${props => props.numberClicked === 1 ? '#6418C3' : darkTheme.secondBackground}; */
//     background: ${props => props.numberClicked === 1 ? darkTheme.secondBackground : allTheme.purpleGradient};
//     border-radius: 0 10px 10px 0;
//     font-weight: ${props => props.numberClicked === 1 ? 1000 : 600};
//     color: ${props => props.numberClicked === 1 ?  'lightgray' : 'white'};
//     border-radius: 0 6px 6px 0;
// `;

export const AllContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`