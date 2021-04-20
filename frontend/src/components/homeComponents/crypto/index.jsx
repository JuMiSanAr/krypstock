import React, { useEffect } from 'react'
import { BitCoin } from './bitCoin'
import {TransactionHistory} from './transactionHistory'
import { CryptoQuickTrade } from './quickTrade';
import { allCryptosAction } from "../../../store/actions/cryptoActions";
import { useDispatch } from "react-redux";
import TopPerformingCrypto from './topPerformingCrypto';
import WorstPerformingCrypto from './worstPerformingCrypto';
import TrendyCrypto from './trendyCrypto';
import { CryptoNewsApiAi } from './cryptoNewsApiAi';

export const Crypto = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const usdtFiltered = data.filter(item => {
                    return (
                        item.symbol.includes("USDT") &&
                        !((item.symbol).slice(0, 4) === 'USDT') &&
                        !item.symbol.includes("UPUSDT") &&
                        !item.symbol.includes("BULLUSDT") &&
                        !item.symbol.includes("BEARUSDT") &&
                        !item.symbol.includes("STUSDT") &&
                        !item.symbol.includes("DOWNUSDT") &&
                        !item.symbol.includes("ESUSDT")
                    )
                });
                const action = allCryptosAction(usdtFiltered);
                dispatch(action);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <BitCoin />
            <CryptoQuickTrade fromPage='HomePage' />
            <TransactionHistory />
            <TrendyCrypto />
            {/*<CryptoNews />*/}
             <CryptoNewsApiAi />
            <TopPerformingCrypto />
            <WorstPerformingCrypto />
        </>
    )
}
