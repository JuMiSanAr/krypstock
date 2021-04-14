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
        // //   console.log(symbol.symbol)  
        //   setShowModal(prev => !prev);
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
                    <td>{symbol.companyName}</td>
                    <td>{symbol.latestPrice}</td>
                    <td>{symbol.change}</td>
                    <td>{symbol.changePercent}</td>
                    <td>{symbol.volume}</td>
                    <td>{symbol.marketCap}</td>
                    {/*<td><TrendingUpIcon/> {symbol.high}</td>*/}
                    </tr>
        </>
    )
}
