import styled from "styled-components";
import {darkTheme, allTheme} from "../Themes";

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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 1rem;
`;

export const LeftButton = styled.button`
    /* background-color: ${props => props.numberClicked === 1 ? darkTheme.secondBackground : '#6418C3'}; */
    background: ${props => props.numberClicked === 1 ? allTheme.purpleGradient : darkTheme.secondBackground};
    text-transform: uppercase;
    font-weight: ${props => props.numberClicked === 1 ? 600 : 1000};
    font-size: 1rem;
    height: 50px;
    width: 46%;
    border-radius: 10px 0 0 10px;
    border: none;
    /* color: ${props => props.numberClicked === 1 ? '#363537' : 'white'}; */
    color: ${props => props.numberClicked === 1 ? 'lightgray' : 'white'};

    cursor: pointer;
    border-radius: 50px 0 0 50px;

    :focus {
        outline: none;
    }

    @media (min-width: 450px) {
        height: 3.3rem;
}
`;

export const RightButton = styled(LeftButton)`
    /* background: ${props => props.numberClicked === 1 ? '#6418C3' : darkTheme.secondBackground}; */
    background: ${props => props.numberClicked === 1 ? darkTheme.secondBackground : allTheme.purpleGradient};
    border-radius: 0 10px 10px 0;
    font-weight: ${props => props.numberClicked === 1 ? 1000 : 600};
    color: ${props => props.numberClicked === 1 ?  'white' : 'lightgray'};
    border-radius: 0 50px 50px 0;
`;