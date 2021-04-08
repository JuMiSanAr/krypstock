import React from 'react';
import FooterNav from '../components/footerNav';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import {GraphWrapper} from "../styles/components/cryptoStyles/bitCoinStyles";

const CryptoPage = () => {

    return (
        <>
            <h1>Crypto</h1>
            <FooterNav/>
            <GraphWrapper>
            <CandlestickCryptoIntraday/>
            </GraphWrapper>
        </>
    )
}

export default CryptoPage;