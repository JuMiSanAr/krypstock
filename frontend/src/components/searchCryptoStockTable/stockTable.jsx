import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export const StockTable = ({symbol}) => {
    return (
        <>
                     <tr>
                    <td className="headcol"><input type="checkbox" name="muhRadio" value=""/></td>
                    <td>{symbol.symbol}</td>
                    <td>{symbol.companyName}</td>
                    <td>{symbol.latestPrice}</td>
                    <td>{symbol.change}</td>
                    <td>{symbol.changePercent}</td>
                    <td>{symbol.volume}</td>
                    <td>{symbol.marketCap}</td>
                    <td><TrendingUpIcon/> {symbol.high}</td>
                    </tr>
        </>
    )
}
