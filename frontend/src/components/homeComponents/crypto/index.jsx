import React from 'react'
import { BitCoin } from './bitCoin'
import { AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import { PriceToday } from './priceToday';

export const Crypto = () => {
    return (
        <AllComponentsWrapper>
        <BitCoin />
        <PriceToday/>
        </AllComponentsWrapper>
    )
}
