import React, {useEffect, useState} from 'react';
import {AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import StockQuickTrade from './quickTrade';
import TopPerformingStocks from './topPerforming';
import WorstPerformingStocks from './worstPerforming'
import TransactionHistory from './transactionHistory';
import TrendyStocks from './trendyStocks';
import {useDispatch, useSelector} from "react-redux";
import {topGainAction, topLossAction} from '../../../store/actions/topGainLossActions'
import {iexSandboxKey} from "../../../store/constants";
import {allStockSymbolsAction, iexStockVolumeAction} from "../../../store/actions/stocksActions";
/*import SymbolFetch from "../../../store/fetches/symbolFetches";*/

const Stock = (props) => {

    const dispatch = useDispatch();

     const gainData = useSelector(state => state.topGainLossReducer.top_gain.data);
     const lossData = useSelector(state => state.topGainLossReducer.top_loss.data);
     const stockVolumeData = useSelector(state => state.stocksReducer.iexStockVolume.data);
     const [topFiveNews, setTopFiveNews] = useState([]);


useEffect(()=>{

    const API_Call_News = `https://sandbox.iexapis.com/stable/stock/aapl/news/last/5?token=${iexSandboxKey}`;
    const API_Volume = `https://sandbox.iexapis.com/stable/stock/market/list/iexvolume?token=${iexSandboxKey}`;
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
    }, []);

    // useEffect(() => {
    //
    //    const API_Call_Gain = `https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=${iexSandboxKey}`;
    //
    //     fetch(API_Call_Gain)
    //         .then(res => res.json())
    //         .then(data => {
    //             const action = topGainAction(data);
    //             dispatch(action);
    //         });
    //
    // /*    SymbolFetch();*/
    //
    // }, []);
    //
    // useEffect(() => {
    //
    //     const API_Call_Loss = `https://sandbox.iexapis.com/stable/stock/market/list/losers?token=${iexSandboxKey}`;
    //
    //     fetch(API_Call_Loss)
    //     .then(res => res.json())
    //     .then(data => {
    //         const action = topLossAction(data);
    //         dispatch(action);
    //     });
    // }, []);

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            <News stock_news={topFiveNews}/>
            <StockQuickTrade fromPage='HomePage' />
            <TransactionHistory />
            <TrendyStocks stock_volume={stockVolumeData} />
            <TopPerformingStocks gain_stock={gainData} />
            <WorstPerformingStocks loss_stock={lossData} />
        </AllComponentsWrapper>
    )
}

export default Stock