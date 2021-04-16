import React, {useEffect} from 'react'
import { BitCoin } from './bitCoin'
import { AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
// import { PriceToday } from './priceToday';
import {TransactionHistory} from './transactionHistory'
import { CryptoNews } from './cryptoNews';
import { CryptoQuickTrade } from './quickTrade';
import {allCryptosAction} from "../../../store/actions/cryptoActions";
import {useDispatch} from "react-redux";
import TopPerformingCrypto from './topPerformingCrypto';
import WorstPerformingCrypto from './worstPerformingCrypto';
import TrendyCrypto from './trendyCrypto';

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
    }, [])

    return (
        <>
            <BitCoin/>
            <TrendyCrypto />
            {/*<CryptoNews />*/}
            <TopPerformingCrypto />
            <WorstPerformingCrypto />
            <TransactionHistory />
            <CryptoQuickTrade fromPage='HomePage' />
        </>
    )
}
