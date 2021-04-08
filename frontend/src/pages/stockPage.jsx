import React, {useState} from 'react';
import FooterNav from '../components/footerNav';
import CandlestickStockIntraday from "../components/charts/candlesticksStockIntraday";
import CandlestickStockHistorical from "../components/charts/candlesticksStockHistorical";
import NewsStock from "../components/newsFeed/newsStock";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import ChartTimeframeButton from "../components/charts/chartSelectTimeframeButton";
import { FormSelectWrapper, GraphWrapper } from "../styles/components/cryptoStyles/bitCoinStyles";

const StockPage = (props) => {

    const [chart, setChart] = useState('day');

    return (
        <>
    <AllComponentsWrapper>
        <h1>Stock</h1>
         <ShrinkingComponentWrapper>
           <FormSelectWrapper>
           <div className="title">
               <h3>Price Chart</h3>
            </div>
            <div >
                <ChartTimeframeButton setChart={setChart}/>
            </div>
           </FormSelectWrapper>
           <GraphWrapper>
               {chart === 'day' ? <CandlestickStockIntraday/> : <CandlestickStockHistorical timeframe={chart}/>}
           </GraphWrapper>
         </ShrinkingComponentWrapper>
            <NewsStock/>
            <FooterNav/>
    </AllComponentsWrapper>
        </>
    )
}

export default StockPage;