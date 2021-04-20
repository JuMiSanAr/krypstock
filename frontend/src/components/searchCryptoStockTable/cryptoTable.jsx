import React, {useState} from 'react'
import AddBoxIcon from "@material-ui/icons/AddBox";
import {useHistory} from "react-router-dom";




export const CryptoTable = ({symbol, setSymbolCrypto, setCryptoShowModal}) => {

    const history = useHistory();

    const slicedSymbol = symbol.symbol.slice(0, -4);

    const toSymbolPage = () => {
        history.push(`/crypto/${symbol.symbol}`);
    }


    const addTransaction = () =>{
        // //   console.log(symbol.symbol) 
          setSymbolCrypto(symbol.symbol) 
        //   setShowModal(prev => !prev);
        setCryptoShowModal(true);
        
    }

    return (
        <>
        {
            <tr>
                <td onClick={() => addTransaction()} className="headcol"><AddBoxIcon className="addIcon"/></td>
                <td onClick={() => {
                    return (
                        !window.getSelection().toString().length ? toSymbolPage() : ''
                    )
                }}>{slicedSymbol}</td>
                <td>{parseFloat(symbol.lastPrice).toFixed(2)}</td>
                <td>{symbol.priceChangePercent}</td>
                {/*<td><TrendingUpIcon/> {symbol.highPrice}</td>*/}
            </tr>
        }
        </>
    )
}
