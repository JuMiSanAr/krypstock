import React from 'react'
import { BitCoin } from './bitCoin'
import { AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import { PriceToday } from './priceToday';
import {TransactionHistory} from './transactionHistory'
import { CryptoNews } from './cryptoNews';
import { CryptoQuickTrade } from './quickTrade';

export const Crypto = () => {
    return (
        <AllComponentsWrapper>
            <BitCoin />
            <PriceToday/>
            <TransactionHistory/>
            <CryptoNews/>
            <CryptoQuickTrade fromPage='HomePage' />
        </AllComponentsWrapper>
    )
}
