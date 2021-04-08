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

const Stock = () => {

    const dispatch = useDispatch();

     const gainData = useSelector(state => state.topGainLossReducer.top_gain.data);
     const lossData = useSelector(state => state.topGainLossReducer.top_loss.data);




/*     console.log("from loss data", lossData)*/


    useEffect(() => {
       const API_KEY = 'Tpk_fec97062db224c2fb7b0b3836ab0e365';
       const API_Call_Gain = `https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=${API_KEY}`;
       const API_Call_Loss = `https://sandbox.iexapis.com/stable/stock/market/list/losers?token=${API_KEY}`;

        fetch(API_Call_Gain)
            .then(res => res.json())
            .then(data => {
                const action = topGainAction(data);
                dispatch(action);

                 console.log("from gain fetch data", data)
            });

         fetch(API_Call_Loss)
            .then(res => res.json())
            .then(data => {
                const action = topLossAction(data);
                dispatch(action);
              /*  setGainFetchedData(data);*/
            });

    }, [])

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            <News/>
            <QuickTrade/>
            <TransactionHistory/>
            <TrendyStocks/>
            {
                gainData ? <TopPerformingStocks gain_stock={gainData}/> : "...LOADING"
            }
            {
                lossData ? <WorstPerformingStocks loss_stock={lossData}/> : "...LOADING"
            }
        </AllComponentsWrapper>
    )

}

export default Stock