import React from 'react';
import { StockTable } from '../../../styles/components/stockStyles/tableStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

const TransactionHistory = () => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Transaction History</h3>
            <StockTable id="transaction-history">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DIS</td>
                        <td>12.04.21</td>
                        <td>5200</td>
                        <td>BUY</td>
                    </tr>
                    <tr>
                        <td>DIS</td>
                        <td>12.04.21</td>
                        <td>5200</td>
                        <td>SELL</td>
                    </tr>
                    <tr>
                        <td>DIS</td>
                        <td>12.04.21</td>
                        <td>5200</td>
                        <td>BUY</td>
                    </tr>
                    <tr>
                        <td>DIS</td>
                        <td>12.04.21</td>
                        <td>5200</td>
                        <td>BUY</td>
                    </tr>
                </tbody>
            </StockTable>
        </ShrinkingComponentWrapper>
    )
}

export default TransactionHistory;