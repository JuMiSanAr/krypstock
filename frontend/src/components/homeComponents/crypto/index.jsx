import React from 'react'
import { BitCoin } from './bitCoin'
import { AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import { PriceToday } from './priceToday';
import {TransactionHistory} from './transactionHistory'
import { CryptoNews } from './cryptoNews';
import { QuickTrade } from './quickTrade';

export const Crypto = () => {
    return (
        <AllComponentsWrapper>
        <BitCoin />
        <PriceToday/>
        <TransactionHistory/>
        <CryptoNews/>
        <QuickTrade/>
        </AllComponentsWrapper>
    )
}
