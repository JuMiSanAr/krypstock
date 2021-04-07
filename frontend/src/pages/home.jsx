// import Button from '../styles/components/buttonStyles';
import {Crypto }from '../components/homeComponents/crypto/index'
import FooterNav from '../components/footerNav';
import Stock from '../components/homeComponents/stock/index.jsx';
import styled from 'styled-components';
import { useState } from "react";

const MainContentWrapper = styled.div`
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

const DoubleButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

const LeftButton = styled.button`
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
    background-color: #6418C3;
    color: white;
}
`;

const RightButton = styled.button`
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
    background-color: #6418C3;
    color: white;
}
`;

const Home = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <>
            {/* <Button/> */}
            <DoubleButtonContainer>
                <LeftButton onClick={() => toggleTab(2)}>Crypto</LeftButton>
                <RightButton onClick={() => toggleTab(1)}>Stock</RightButton>
            </DoubleButtonContainer>
            <MainContentWrapper>
         
            <div className={toggleState === 1 ? "active-content" : "content"}>
                <Stock/>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
                <Crypto/>
            </div>
            </MainContentWrapper>
            <FooterNav/>
        </>
    )
}

export default Home;