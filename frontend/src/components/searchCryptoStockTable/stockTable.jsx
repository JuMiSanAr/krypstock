import React from 'react'
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddBoxIcon from "@material-ui/icons/AddBox";
import {useHistory} from "react-router-dom";

export const StockTable = ({symbol, setStockName, setStockShowModal, setStockSymbol}) => {

    const history = useHistory();

    const toSymbolPage = () => {
        history.push(`/stock/${symbol.symbol}`);
    }



    const addTransaction = () =>{
          setStockName(symbol.companyName)
          setStockSymbol(symbol.symbol)
          setStockShowModal(true);
    }


    return (
        <>
                     <tr>
                    <td  onClick={() => addTransaction()} className="headcol"><AddBoxIcon className="addIcon"/></td>
                    <td onClick={() => {
                        return (
                            !window.getSelection().toString().length ? toSymbolPage() : ''
                        )
                    }}>{symbol.symbol}</td>
                    <td>{symbol.latestPrice}</td>
                    <td>{parseFloat(symbol.changePercent).toFixed(3)}</td>
                    {/*<td><TrendingUpIcon/> {symbol.high}</td>*/}
                    </tr>
        </>
    )
}
