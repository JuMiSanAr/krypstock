import React, {useEffect, useState} from 'react';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import StockQuickTrade from './quickTrade';
import TopPerformingStocks from './topPerforming';
import WorstPerformingStocks from './worstPerforming'
import TransactionHistory from './transactionHistory';
import TrendyStocks from './trendyStocks';
import {useDispatch, useSelector} from "react-redux";
import {topGainAction, topLossAction} from '../../../store/actions/topGainLossActions'
import {iexAPIKey, iexSandboxKey} from "../../../store/constants";
import {allStockSymbolsAction, iexStockVolumeAction} from "../../../store/actions/stocksActions";
/*import SymbolFetch from "../../../store/fetches/symbolFetches";*/

const Stock = () => {

    const dispatch = useDispatch();

     const gainData = useSelector(state => state.topGainLossReducer.top_gain.data);
     const lossData = useSelector(state => state.topGainLossReducer.top_loss.data);
     const stockVolumeData = useSelector(state => state.stocksReducer.iexStockVolume.data);
     const [topFiveNews, setTopFiveNews] = useState([]);


useEffect(()=>{

    const API_Call_News = `https://sandbox.iexapis.com/stable/stock/aapl/news/last/5?token=${iexSandboxKey}`;
    const API_Volume = `https://sandbox.iexapis.com/stable/stock/market/list/mostactive?token=${iexSandboxKey}`;
    const API_Call_Gain = `https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=${iexSandboxKey}`;
    const API_Call_Loss = `https://sandbox.iexapis.com/stable/stock/market/list/losers?token=${iexSandboxKey}`;
    const API_Call_Symbols = `https://sandbox.iexapis.com/stable/ref-data/symbols?token=${iexSandboxKey}`;

    fetch(API_Call_News)
        .then(res => res.json())
        .then(data => {
            setTopFiveNews(data);
            return fetch(API_Volume)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const action = iexStockVolumeAction(data);
            dispatch(action);
            return fetch(API_Call_Gain);
        })
        .then(res => res.json())
        .then(data => {
            const action = topGainAction(data);
            dispatch(action);
            return fetch(API_Call_Loss);
        })
        .then(res => res.json())
        .then(data => {
            const action = topLossAction(data);
            dispatch(action);
            return fetch(API_Call_Symbols)
        })
        .then(res => res.json())
        .then(data => {
            const symbolNameList = data.map(symbol => {
                return {
                    symbol: symbol.symbol,
                    name: symbol.name
                }
            })
            const action = allStockSymbolsAction(symbolNameList);
            dispatch(action);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <MarketOverview/>
            {/* <News stock_news={topFiveNews}/> */}
            <StockQuickTrade fromPage='HomePage' />
            <TransactionHistory />
            <TrendyStocks stock_volume={stockVolumeData} />
            <TopPerformingStocks gain_stock={gainData} />
            <WorstPerformingStocks loss_stock={lossData} />
        </>
    )
}

export default Stock