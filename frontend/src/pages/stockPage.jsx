import React from 'react';
import FooterNav from '../components/footerNav';
import CandlestickStockIntraday from "../components/charts/candlesticksStockIntraday";
import CandlestickStockHistorical from "../components/charts/candlesticksStockHistorical";
import NewsStock from "../components/newsFeed/newsStock";

const StockPage = () => {

    return (
        <>
            <h1>Stock</h1>
            <FooterNav/>
            <CandlestickStockIntraday/>
            <CandlestickStockHistorical/>
            <NewsStock/>
        </>
    )
}

export default StockPage;