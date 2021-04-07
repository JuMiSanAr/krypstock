import React from 'react';
import FooterNav from '../components/footerNav';
import CandlestickStockIntraday from "../components/charts/candlesticksStockIntraday";
import CandlestickStockHistorical from "../components/charts/candlesticksStockHistorical";
import NewsStock from "../components/newsFeed/newsStock";
import {AllComponentsWrapper} from "../styles/globalParts/containerStyles";

const StockPage = () => {

    return (
        <>
            <h1>Stock</h1>
            <AllComponentsWrapper>
                <CandlestickStockIntraday/>
                <CandlestickStockHistorical/>
                <NewsStock/>
                <FooterNav/>
            </AllComponentsWrapper>
        </>
    )
}

export default StockPage;