import React, {useEffect, useState} from 'react';
import {AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import QuickTrade from './quickTrade';
import TopPerformingStocks from './topPerforming';
import WorstPerformingStocks from './worstPerforming'
import TransactionHistory from './transactionHistory';
import TrendyStocks from './trendyStocks';
import {useDispatch, useSelector} from "react-redux";
import {topGainAction, topLossAction} from '../../../store/actions/topGainLossActions'
import {iexSandboxKey} from "../../../store/constants";
import {iexStockVolumeAction} from "../../../store/actions/stocksActions";
/*import SymbolFetch from "../../../store/fetches/symbolFetches";*/



const Stock = (props) => {

    const dispatch = useDispatch();

     const gainData = useSelector(state => state.topGainLossReducer.top_gain.data);
     const lossData = useSelector(state => state.topGainLossReducer.top_loss.data);
     const stockVolumeData = useSelector(state => state.stocksReducer.iexStockVolume.data);
     const [topFiveNews, setTopFiveNews] = useState([]);


useEffect(()=>{

        const API_Volume = `https://sandbox.iexapis.com/stable/stock/market/list/iexvolume?token=${iexSandboxKey}`;

        fetch(API_Volume)
            .then(res => res.json())
            .then(data => {
                const action = iexStockVolumeAction(data);
                dispatch(action);
            });
    }, []
);

    useEffect( () => {

        const API_Call_News = `https://sandbox.iexapis.com/stable/stock/aapl/news/last/5?token=${iexSandboxKey}`;

        fetch(API_Call_News)
            .then(res => res.json())
            .then(data => {
                setTopFiveNews(data);
            });

        }, []
    );

    useEffect(() => {

       const API_Call_Gain = `https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=${iexSandboxKey}`;
       const API_Call_Loss = `https://sandbox.iexapis.com/stable/stock/market/list/losers?token=${iexSandboxKey}`;

        fetch(API_Call_Gain)
            .then(res => res.json())
            .then(data => {
                const action = topGainAction(data);
                dispatch(action);
            });

         fetch(API_Call_Loss)
            .then(res => res.json())
            .then(data => {
                const action = topLossAction(data);
                dispatch(action);
            });

    /*    SymbolFetch();*/

    }, []);

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            {topFiveNews ? <News stock_news={topFiveNews}/> : "...LOADING"}
            <QuickTrade/>
            <TransactionHistory />
            {stockVolumeData ? <TrendyStocks stock_volume={stockVolumeData}/> : "...LOADING"}
            {gainData ? <TopPerformingStocks gain_stock={gainData}/> : "...LOADING"}
            {lossData ? <WorstPerformingStocks loss_stock={lossData}/> : "...LOADING"}
        </AllComponentsWrapper>
    )

}

export default Stock