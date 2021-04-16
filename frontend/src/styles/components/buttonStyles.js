import styled from 'styled-components';

const SingleButtonContainer = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Content = styled.button `
background-color: #6418C3;
text-transform: uppercase;
font-weight: 600;
height: 43px;
margin-top:5px;
margin-left: 10px;
border-radius: 10px;
border: none;
color: white;
padding: 0 45px 0 45px;
`;

export const BuySell = styled.button`
background-color: rgba(255, 255, 255, 0.3);
text-transform: uppercase;
font-weight: 400;
font-size: 11px;
height: 30px;
border-radius: 10px;
border: 1px solid white;
color: white;
margin-top: 15px;
cursor: pointer;
:hover {
    background-color: rgba(255, 255, 255, 0.5);
}
`;

const DoubleButtonContainer = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

const LeftButton = styled.button `
background-color: white;
text-transform: uppercase;
font-weight: 600;
height: 50px;
width: 100%;
border-radius: 10px 0 0 10px;
border: none;
color: #363537;

:hover {
    background-color: #6418C3;
    color: white;
    font-weight: 800;
}
:focus {
    outline: none;
}
`;

const RightButton = styled.button `
background-color: white;
text-transform: uppercase;
font-weight: 600;
height: 50px;
width: 100%;
border-radius: 0 10px 10px 0;
border: none;
color: #363537;

:hover {
    background-color: #6418C3;
    color: white;
    font-weight: 800;
}
:focus {
    outline: none;
}
`;

const DoubleButtonContainerEx = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

const LeftButtonEx = styled.button `
padding: 10px;
text-transform: uppercase;
font-weight: 600;
height: 50px;
width: 100%;
border-bottom: #6418C3;
border: none;
color: white;
background-color: #363537;

:hover {
    border-bottom: 3px solid #6418C3;
}

:focus {
    outline: none;
}
`;

const RightButtonEx = styled.button `
padding: 10px;
text-transform: uppercase;
font-weight: 600;
height: 50px;
width: 100%;
border: none;
color: white;
background-color: #363537;

:hover {
    border-bottom: 3px solid #6418C3;
}

:focus {
    outline: none;
}
`;