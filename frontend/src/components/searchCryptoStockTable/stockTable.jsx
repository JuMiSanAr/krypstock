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

    // console.log(symbol)

    return (
        <>
                     <tr>
                        <td  onClick={() => addTransaction()} className="headcol"><AddBoxIcon className="addIcon"/></td>
                        <td onClick={() => {
                            return (
                                !window.getSelection().toString().length ? toSymbolPage() : ''
                            )
                        }}>
                            <div className="tdDiv">
                                {symbol.symbol}
                            </div>
                        </td>
                        <td>
                            <div className="tdDivWide">
                                {symbol.changePercent > 0 ? <i className="fas fa-angle-double-up" style={{ color: 'green' }}></i> :
                                symbol.changePercent < 0 ? <i className="fas fa-angle-double-down" style={{ color: 'red' }}></i> :
                                null} {Math.abs(Number(symbol.changePercent*100)).toFixed(2)}%
                            </div>
                        </td>
                        <td>
                            <div className="tdDivPrice">
                                {symbol.latestPrice}
                            </div>
                        </td>
                        <td>
                            <div className="tdDivVolume">
                                {(symbol.volume/1000000).toFixed(2)}
                            </div>
                        </td>
                        {/*<td><TrendingUpIcon/> {symbol.high}</td>*/}
                    </tr>
        </>
    )
}
