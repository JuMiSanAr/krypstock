import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";


const CryptoList = (props) => {

    const [fetchedData, setData] = useState([]);
    // const exchange = 'Bitcoin/USD';
    const cryptoCurrency= 'BTCUSDT';
    const tick_interval = '1m';

    useEffect(() => {
        FetchCrypto();
    }, []);

    const FetchCrypto = () => {
        const apiKey= "hEONEAKmoUPGx9EyweXiP7WEJzbmJEihUzsJQ1THnOwnLRuWkr4vEw7qF0xqhh7u"
        const secretKey= "3vPVa6Cjg4XtcqaRCAPZkn9jnrf9TaJvYCFS2oYNk5jZpA6umBA84opIfy0vRDZj"

        const API_Call = `https://api.binance.com/api/v3/ticker/price`;
        const config = {
                  // mode: 'no-cors',
                  headers: {
                    "Content-Type": "application/json",
                    // "User-Agent": "kryptstock",
                    // "Access-Control-Allow-Credentials": "true"
                  }
                }

        fetch(API_Call,config)
            .then(res => console.log(res))
            .then(data => {console.log(data.event)
            });

        }

        return (<>
                <div id="chartCryptoHistorical"/>
                </>
        );
}
export default CryptoList


