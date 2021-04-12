import React from 'react'
// import {Table, TableWrapper } from '../../styles/pages/searchStyles'
// import TablePagination from '@material-ui/core/TablePagination';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';



export const CryptoTable = ({symbol}) => {
    return (
        <>
        {
            <tr>
            <td className="headcol"><input type="checkbox" name="muhRadio" value=""/></td>
            <td>{symbol.symbol}</td>
            <td>{symbol.lastPrice}</td>
            <td>{symbol.priceChange}</td>
            <td>{symbol.priceChangePercent}</td>
            <td>{symbol.volume}</td>
            <td><TrendingUpIcon/> {symbol.highPrice}</td>
            </tr>
        }
    </>
    )
}
