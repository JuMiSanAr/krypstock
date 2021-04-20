import AddBoxIcon from "@material-ui/icons/AddBox";
import {useHistory} from "react-router-dom";


export const CryptoTable = ({symbol, setSymbolCrypto, setCryptoShowModal}) => {

    const history = useHistory();

    const slicedSymbol = symbol.symbol.slice(0, -4);

    const toSymbolPage = () => {
        history.push(`/crypto/${symbol.symbol}`);
    }


    const addTransaction = () =>{
        setSymbolCrypto(symbol.symbol)
        setCryptoShowModal(true);
    }

    // console.log('symbol',symbol.priceChangePercent)

    return (
        <>
        {
            <tr>
                <td onClick={() => addTransaction()} className="headcol"><AddBoxIcon className="addIcon"/></td>
                <td onClick={() => {
                    return (
                        !window.getSelection().toString().length ? toSymbolPage() : ''
                    )
                }}>
                    <div className="tdDiv">
                        {slicedSymbol}
                    </div>
                </td>
                <td>
                    <div className="tdDivWide">
                        {symbol.priceChangePercent > 0 ? <i className="fas fa-angle-double-up" style={{ color: 'green' }}></i> :
                        symbol.priceChangePercent < 0 ? <i className="fas fa-angle-double-down" style={{ color: 'red' }}></i> :
                        null} {Math.abs(Number(symbol.priceChangePercent)).toFixed(2)}%
                    </div>
                </td>
                <td>
                    <div className="tdDivPrice">
                        {parseFloat(symbol.lastPrice).toFixed(2)}
                    </div>
                </td>
                <td>
                    <div className="tdDivVolume">
                        {(symbol.quoteVolume/1000000).toFixed(2)}
                    </div>
                </td>
                {/*<td><TrendingUpIcon/> {symbol.highPrice}</td>*/}
            </tr>
        }
        </>
    )
}
