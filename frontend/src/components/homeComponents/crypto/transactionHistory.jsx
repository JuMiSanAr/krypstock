import React from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
// import {TableWrapper} from '../../../styles/components/cryptoStyles/transactionHistoryStyles'
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'


export const TransactionHistory = () => {
    return (
        <ShrinkingComponentWrapper> 
        <h2>Transaction History</h2>
        {/* <TableWrapper> */}
        <Table id="trans-history">
                <thead>
                    <tr>
                    <th>Currency</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Transaction</th>
                    </tr>
                </thead>
        <tbody>
            <tr>
            <td>Bitcoin</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Buy</td>
            </tr>
            <tr>
            <td>Monero</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Sell</td>
            </tr>
            <tr>
            <td>LiteCoin</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Buy</td>
            </tr>
            <tr>
            <td>Etherum</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Buy</td>
            </tr>
            <tr>
            <td>Etherum</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Buy</td>
            </tr>
            <tr>
            <td>Etherum</td>
            <td>12.04.21</td>
            <td>5200</td>
            <td>Buy</td>
            </tr>
        </tbody>
        </Table>
    </ShrinkingComponentWrapper>
    )
}


