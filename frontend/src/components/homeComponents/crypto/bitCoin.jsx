import React, {useEffect, useState} from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper, GraphWrapper, RadioWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import CandlestickCryptoIntraday from "../../charts/candlesticksCryptoIntraday";
import ChartTimeCrypto from "../../charts/chartSelectTimeCrypto";
import CandlestickCryptoHistorical from "../../charts/candlesticksCryptoHistorical";
import {postNewTransactionFetch} from "../../../store/fetches/transactionFetches";



export const BitCoin = (props) => {

    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    // const [intradayData, setIntradayData] = useState([]);
    // const [historicalData, setHistoricalData] = useState([]);

    // const symbol = ('btcusdt').toUpperCase();

    const [symbol, setSymbol] = useState('BTCUSDT');
    const [symbolInput, setSymbolInput] = useState('');

    // const type = "C";
    //
    // const [incorrectSymbol, setIncorrectSymbol] = useState(false);

    const [allSymbols, setAllSymbols] = useState([]);

    const [stupidToggle, setStupidToggle] = useState(false);

    useEffect( () => {

        let symbolsSet = new Set();

        fetch("https://api.binance.com/api/v3/exchangeInfo")
        .then(res => res.json())
        .then(data => {
            // console.log('crypto data.symbols', data.symbols)
            const nonDuplicatedSymbols = data.symbols.filter( crypto => crypto['quoteAsset'] === 'USDT'&&
                    crypto.symbol.includes("USDT") &&
                        !((crypto.symbol).slice(0, 4) === 'USDT') &&
                        !crypto.symbol.includes("UPUSDT") &&
                        !crypto.symbol.includes("BULLUSDT") &&
                        !crypto.symbol.includes("BEARUSDT") &&
                        !crypto.symbol.includes("STUSDT") &&
                        !crypto.symbol.includes("DOWNUSDT") &&
                        !crypto.symbol.includes("ESUSDT")
            );
            for (const crypto of nonDuplicatedSymbols) {
                symbolsSet.add(crypto.symbol )
            }
            symbolsSet = Array.from(symbolsSet)  //convert set to array
            // console.log('symbolsSet', symbolsSet)
            setAllSymbols(symbolsSet);
        })
    }, []);

    useEffect( () => {

        // console.log('allSymbols', allSymbols)
    }, [allSymbols])

    const changeSymbol = () => {
        setSymbol(symbolInput);
        setStupidToggle(true);
    }

    useEffect(() => {
        setStupidToggle(false);
    }, [stupidToggle])

    return (
        <>
         <ShrinkingComponentWrapper> 
           <FormSelectWrapper>
           <div className="title">
               <h3 >{symbol}</h3>
            </div>
            <div >
                <ChartTimeCrypto setChart2={setChartTimeframe2}/>
            </div>

           </FormSelectWrapper>
           <RadioWrapper>
              <label htmlFor="company-input">Cryptocurrency</label>
                            <input id="company-input" className="selector" list="cryptoSymbols" onChange={e => setSymbolInput(`${e.target.value}USDT`)} required/>
                            <button onClick={() => changeSymbol()}>Bouya button</button>
                            {/* <datalist id="cryptosymbols" >
                                { allSymbols && allSymbols.length !== 0 ?
                                    allSymbols.map( (symbol, index) =>
                                    <option value={symbol} key={index} />)
                                    : null
                                }
                            </datalist> */}
           </RadioWrapper>
           <GraphWrapper>
               {
                   chartTimeframe2 === '1d' && !stupidToggle ?
                       <CandlestickCryptoIntraday symbol={symbol} timeLength={chartTimeframe2}/>
                       : ''
               }
               {chartTimeframe2 === '1d' ?
                   ''
                   :
                   <CandlestickCryptoHistorical symbol={symbol} timeLength={chartTimeframe2}/>}
           </GraphWrapper>
        </ShrinkingComponentWrapper>
        </>
    )
}
