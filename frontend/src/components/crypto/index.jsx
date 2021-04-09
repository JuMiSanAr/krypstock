import React from 'react';
import FooterNav from '../footerNav';
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import { DetailFont} from "../../styles/components/cryptoStyles";
import {FormSelectWrapper} from "../../styles/components/cryptoStyles/bitCoinStyles";

const Crypto = () => {

    return (
        <>
             <AllComponentsWrapper>

                   <ShrinkingComponentWrapper>
                       <h3>Bitcoin</h3 >
                    <DetailFont>Coin Detail</DetailFont>
                        <FormSelectWrapper>
               <div className="title">
                </div>
                <div >
                    <select className="selector">
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                    <option value="day">Day</option>
                    </select>
                </div>
           </FormSelectWrapper>
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
            <FooterNav />
        </>
    )
}

export default Crypto;

// import React, {useEffect, useState} from 'react';
// import {createChart, CrosshairMode} from "lightweight-charts";
// import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
//
//
// const CandlestickCryptoIntraday = (props) => {
//
// //{"e":"aggTrade","E":1617869515532,"s":"BTCUSDT","a":671183311,"p":"57125.03000000","q":"0.05068500","f":752455921,"l":752455921,"T":1617869515531,"m":true,"M":true}
//
//    // TEMP (Data will come from props)
//     const [fetchedData, setData] = useState([]);
//     const market = 'NASDAQ';
//     const dataF=[]
//     useEffect(() => {
//         fetchCrypto();
//     }, []);
//
//     const fetchCrypto = () => {
//         const API_KEY = 'hEONEAKmoUPGx9EyweXiP7WEJzbmJEihUzsJQ1THnOwnLRuWkr4vEw7qF0xqhh7u';
//      //   const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${API_KEY}`;
//
//         const binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
//             binanceSocket.onmessage = event => {
//                 const lastdata= JSON.parse(event.data)
//                 // console.log(event.data)
//               // console.log(lastdata["k"])
//                 const data = fetchedData.concat({
//                         time: lastdata["E"],
//                         open: lastdata["k"]['o'],
//                         high: lastdata["k"]['h'],
//                         low: lastdata["k"]['l'],
//                         close: lastdata["k"]['c']
//                     })
//                 setData(data);
//  console.log(data)
//         }
//     }
//
//     useEffect(() => {
//         if (fetchedData.length > 0) {
//             const chart = createChart(document.getElementById('chartCryptoIntraday'), {
//                 width: 300,
//                 height: 200,
//                 layout: {
//                     backgroundColor: 'rgb(0, 0, 0, 0)',
//                     textColor: 'rgba(255, 255, 255, 0.9)',
//                 },
//                 grid: {
//                     vertLines: {
//                         color: 'rgba(197, 203, 206, 0.5)',
//                     },
//                     horzLines: {
//                         color: 'rgba(197, 203, 206, 0.5)',
//                     },
//                 },
//                 crosshair: {
//                     mode: CrosshairMode.Normal,
//                 },
//                 rightPriceScale: {
//                     borderColor: 'rgba(197, 203, 206, 0.8)',
//                 },
//                 timeScale: {
//                     borderColor: 'rgba(197, 203, 206, 0.8)',
//                 },
//             });
//             const candleSeries = chart.addCandlestickSeries({
//                 upColor: 'rgb(71,169,12)',
//                 downColor: '#a91111',
//                 borderDownColor: 'rgb(0,0,0)',
//                 borderUpColor: 'rgb(0,0,0)',
//                 wickDownColor: 'rgb(131,14,14)',
//                 wickUpColor: 'rgb(39,148,0)'
//             });
//
//             chart.applyOptions({
//                 watermark: {
//                     color: 'rgba(255, 255, 255, 0.4)',
//                     visible: true,
//                     text: `Market: ${market}`,
//                     fontSize: 10,
//                     horzAlign: 'left',
//                     vertAlign: 'bottom',
//                 },
//                 priceScale: {
//                     autoScale: false,
//                     invertScale: true,
//                     alignLabels: false,
//                     borderVisible: false,
//                     borderColor: '#555ffd',
//                     scaleMargins: {
//                         top: 0.30,
//                         bottom: 0.25,
//                     },
//                 },
//                 timeScale: {
//                     fixRightEdge: true,
//                     lockVisibleTimeRangeOnResize: true,
//                     borderVisible: false,
//                     borderColor: '#fff000',
//                     visible: true,
//                     timeVisible: true,
//                     secondsVisible: false,
//                 },
//             });
//
//             candleSeries.setData(fetchedData);
//         }
//     }, [fetchedData]);
//         return (<ShrinkingComponentWrapper>
//                 <div id="chartCryptoIntraday"/>
//             </ShrinkingComponentWrapper>
//         );
// }
// export default CandlestickCryptoIntraday
//
//
