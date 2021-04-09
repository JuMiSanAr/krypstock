import React, {useEffect, useState, useCallback} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";
import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import {iexSandboxKey} from "../../store/constants";


const CandlestickCryptoHistorical = (props) => {

//{"e":"aggTrade","E":1617869515532,"s":"BTCUSDT","a":671183311,"p":"57125.03000000","q":"0.05068500","f":752455921,"l":752455921,"T":1617869515531,"m":true,"M":true}

   // TEMP (Data will come from props)
    const [fetchedData, setData] = useState([]);
    const exchange = 'Bitcoin/USD';
    const cryptoCurrency= 'BTCUSDT';
    const tick_interval = '1m';

    useEffect(() => {
        FetchCrypto();
    }, []);

    const FetchCrypto = () => {
        const API_KEY = 'hEONEAKmoUPGx9EyweXiP7WEJzbmJEihUzsJQ1THnOwnLRuWkr4vEw7qF0xqhh7u';

           const API_Call = `https://api.binance.com/api/v3/klines?symbol=${cryptoCurrency}&interval=${tick_interval}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {

                const allData = data.map((obj,index) => {
                        // console.log(data)
                    let timeFix=obj[0]/1000
                    return {
                        time: timeFix,
                        open: obj[1],
                        high: obj[2],
                        low: obj[3],
                        close: obj[4]
                    }
                })
                console.log(allData)
                setData(allData);
            });

        }

        useEffect(() => {
        document.getElementById('chartCryptoHistorical').innerHTML = '';
        if (fetchedData.length>0) {
            const chart = createChart(document.getElementById('chartCryptoHistorical'), {
                width: 300,
                height: 200,
                layout: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    textColor: 'rgba(255, 255, 255, 0.9)',
                },
                grid: {
                    vertLines: {
                        color   : 'rgba(197, 203, 206, 0.5)',
                    },
                    horzLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
                    },
                },
                crosshair: {
                    mode: CrosshairMode.Normal,
                },
                rightPriceScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
                timeScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
            });
            const candleSeries = chart.addCandlestickSeries({
                upColor: 'rgb(71,169,12)',
                downColor: '#a91111',
                borderDownColor: 'rgb(0,0,0)',
                borderUpColor: 'rgb(0,0,0)',
                wickDownColor: 'rgb(131,14,14)',
                wickUpColor: 'rgb(39,148,0)',
            });

            chart.applyOptions({
                watermark: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    visible: true,
                    text: `Market: ${cryptoCurrency} Interval:${tick_interval}`,
                    fontSize: 10,
                    horzAlign: 'left',
                    vertAlign: 'bottom',
                },
                priceScale: {
                    autoScale: false,
                    alignLabels: false,
                    borderVisible: false,
                    borderColor: '#555ffd',
                    scaleMargins: {
                        top: 0.30,
                        bottom: 0.25,
                    },
                },
                timeScale: {
                    fixRightEdge: true,
                    lockVisibleTimeRangeOnResize: true,
                    borderVisible: false,
                    borderColor: '#fff000',
                    visible: true,
                    timeVisible: true,
                    secondsVisible: false,
                },
            });

            candleSeries.setData(fetchedData);
        }

    }, [fetchedData]);


        return (<>
                <div id="chartCryptoHistorical"/>
                </>
        );
}
export default CandlestickCryptoHistorical


