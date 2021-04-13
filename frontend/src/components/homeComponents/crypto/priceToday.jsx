import React from 'react';
import {useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'


export const PriceToday = () => {

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos)

    console.log('allcryptos', allCryptos)

    return (
        <ShrinkingComponentWrapper> 
            <h3>Price Today</h3>
            <Table id="crypto">
                <thead>
                    <tr>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>Change %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Bitcoin</td>
                    <td>57304</td>
                    <td>7.20%</td>
                    </tr>
                    <tr>
                    <td>Monero</td>
                    <td>57304</td>
                    <td>7.20%</td>
                    </tr>
                </tbody>
            </Table>
        </ShrinkingComponentWrapper>
    )
}
