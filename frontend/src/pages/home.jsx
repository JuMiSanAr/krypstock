// import Button from '../styles/components/buttonStyles';
import {Crypto }from '../components/homeComponents/crypto/index'
import FooterNav from '../components/footerNav';
import Stock from '../components/homeComponents/stock/index.jsx';
import { useState } from "react";
import {DoubleButtonContainer, LeftButton, RightButton, MainContentWrapper} from "../styles/pages/homeStyles"

const Home = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <>
            <DoubleButtonContainer>
                <LeftButton onClick={() => toggleTab(1)} numberClicked={toggleState}>Stock</LeftButton>
                <RightButton onClick={() => toggleTab(2)} numberClicked={toggleState}>Crypto</RightButton>
            </DoubleButtonContainer>
            <MainContentWrapper>
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <Stock />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <Crypto />
                </div>
            </MainContentWrapper>
            <FooterNav/>
        </>
    )
}

export default Home;