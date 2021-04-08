// import React, {useEffect, useState} from 'react';
// import {createChart, CrosshairMode} from "lightweight-charts";
// import useWebSocket, { ReadyState } from 'react-use-websocket';
import React, { useState, useCallback, useMemo, useRef } from 'react';

const CandlestickCryptoIntraday = (props) => {
    const tradeDiv=document.getElementById('data')
    const binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@aggTrade');
    binanceSocket.onmessage = event => {
        console.log(event.data)
             let messageObject= JSON.parse(event.data)
             tradeDiv.append(messageObject)
    }
        return (<><div id='data'>s</div></>
        );
};

export default CandlestickCryptoIntraday


// }
//
//     const handleClickChangeSocketUrl = useCallback(() =>
//     setSocketUrl('wss://demos.kaazing.com/echo'), []);
//
//     function b () {
//         console.log("hello")
//         const tradeDiv=document.getElementById('data')
//         const binanceSocket =  new WebSocket("wss://stream.binance.com:9443/ws/eurbtct@trade");
//         console.log(binanceSocket)
//         binanceSocket.onmessage=function(event){
//             console.log(event.data);
//             let messageObject= JSON.parse(event.data)
//             tradeDiv.append(messageObject.p)
//     }
//     }
//     return (
//         <>
//             <div id="data"/>
//             <button onClick={handleClickChangeSocketUrl}>click</button>
//         </>
//     )
// }

