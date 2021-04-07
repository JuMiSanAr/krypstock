import React from 'react';
import FooterNav from '../components/footerNav';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";

const CryptoPage = () => {

    return (
        <>
            <h1>Crypto</h1>
            <FooterNav/>
            <CandlestickCryptoIntraday/>
        </>
    )
}

export default CryptoPage;