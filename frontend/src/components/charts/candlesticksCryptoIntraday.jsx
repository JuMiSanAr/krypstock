import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";

const CandlestickCryptoIntraday = (props) => {

    const [fetchedData, setData] = useState([]);
    const cryptoCurrency = props.symbol?(props.symbol).toLowerCase():'btcusdt';
    const cryptoCurrencyPrevious = props.symbol?(props.symbol).toUpperCase():'BTCUSDT';

    const [websocketOpen, setWebsocketOpen] = useState(false);

    useEffect(() => {
        var d = new Date();
        let fixedDay=d.getDate();
        if (fixedDay>=7){
            d.setDate(d.getDate()-1);
        }else{
            d.setMonth(d.getMonth() - 1)
            d.setDate(d.getDate()-1);
        }

        const timestamp = d.getTime();

        const API_Call = `https://api.binance.com/api/v3/klines?symbol=${cryptoCurrencyPrevious}&interval=15m&startTime=${timestamp}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                const allData = data.map((obj,index) => {

                    let timeFix=obj[0]/1000
                    // console.log(timeFix)
                    return {
                        time: timeFix,
                        open: obj[1],
                        high: obj[2],
                        low: obj[3],
                        close: obj[4]
                    }
                })
                setData(allData);
                // return fetchCrypto();
            })
    }, []);

    useEffect(() => {
        if (fetchedData.length && !websocketOpen) {
            fetchCrypto()
            setWebsocketOpen(true);
        }

    }, [fetchedData]);

     useEffect(() => {
        if(props.timeLength!=='1d'){
        document.getElementById('chartCryptoIntraday').innerHTML = '';
          // fetchCrypto();
        }
    }, [props.timeLength,props.symbol]);

        const fetchCrypto = () => {
            const binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${cryptoCurrency}@kline_1m`);
            binanceSocket.onmessage = event => {

                // console.log(fetchedData)
                const lastdata= JSON.parse(event.data);
                const timestamp = Math.floor(lastdata["E"]/1000);

                if (fetchedData.length === 0) {
                    console.log('no length?!?!??!')
                }

                if (fetchedData.length > 0 && lastdata["k"]['o'] !== fetchedData[fetchedData.length-1]['open']) {
                    console.log('here', timestamp)
                    const newData = [...fetchedData]

                    fetchedData.push({
                           // time: lastdata["k"]['t'],
                            time: timestamp,
                            open: lastdata["k"]['o'],
                            high: lastdata["k"]['h'],
                            low: lastdata["k"]['l'],
                            close: lastdata["k"]['c']
                        })

                    setData(newData);
                }
                else if (fetchedData.length > 0 && lastdata["k"]['o'] === fetchedData[fetchedData.length-1]['open']) {
                    console.log('there', props.symbol)

                    const newData = [...fetchedData]

                    fetchedData.pop();
                    fetchedData.push({
                           // time: lastdata["k"]['t'],
                            time: timestamp,
                            open: lastdata["k"]['o'],
                            high: lastdata["k"]['h'],
                            low: lastdata["k"]['l'],
                            close: lastdata["k"]['c']
                        })

                    setData(newData);
                }
        }
    }

    useEffect(() => {

        if (fetchedData.length > 0) {
            document.getElementById('chartCryptoIntraday').innerHTML = '';
             const chart = createChart(document.getElementById('chartCryptoIntraday'), {
                width: 300,
                height: 200,
                layout: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    textColor: 'rgba(255, 255, 255, 0.9)',
                },
                grid: {
                    vertLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
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
                // borderDownColor: 'rgb(0,0,0)',
                // borderUpColor: 'rgb(0,0,0)',
                wickDownColor: 'rgb(131,14,14)',
                wickUpColor: 'rgb(39,148,0)'
            });
            candleSeries.setData(fetchedData);

            chart.applyOptions({
                watermark: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    visible: true,
                    text: `UTC ${props.symbol} Interval: 1m`,
                    fontSize: 10,
                    horzAlign: 'left',
                    vertAlign: 'bottom',
                },
                priceScale: {
                    autoScale: true,
                    invertScale: false,
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
                    lockVisibleTimeRangeOnResize: false,
                    borderVisible: false,
                    borderColor: '#fff000',
                    visible: true,
                    timeVisible: true,
                    secondsVisible: false,
                },
            });
        }
    }, [fetchedData])

        return (
                <div id="chartCryptoIntraday"/>

        );
}
export default CandlestickCryptoIntraday

