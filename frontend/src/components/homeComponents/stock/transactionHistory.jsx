import React from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

const TransactionHistory = () => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Transaction History</h3>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Transaction</th>
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
            </table>
        </ShrinkingComponentWrapper>
    )
}

export default TransactionHistory;