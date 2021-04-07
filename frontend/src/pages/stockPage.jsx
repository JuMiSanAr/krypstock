import React from 'react';
import FooterNav from '../components/footerNav';
import CandlestickChart from "../components/charts/candlesticks";

const StockPage = () => {

    return (
        <>
            <h1>Stock</h1>
            <FooterNav/>
            <CandlestickChart/>
        </>
    )
}

export default StockPage;