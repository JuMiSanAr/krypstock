import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";

const CandlestickCryptoIntraday = (props) => {

    const [fetchedData, setData] = useState([]);
    const cryptoCurrency= 'btcusdt';

    useEffect(() => {
        fetchCrypto();
    }, []);

     useEffect(() => {
        if(props.timeLength==='1d'){
          fetchCrypto();
        }
    }, [props.timeLength]);

        const fetchCrypto = () => {
            const binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${props.symbol}@kline_1m`);
            binanceSocket.onmessage = event => {
                const lastdata= JSON.parse(event.data);
                const timestamp = lastdata["E"]/1000;

                if (fetchedData.length === 0) {
                    const newData = [...fetchedData]

                    fetchedData.push({
                            time: timestamp,
                            open: lastdata["k"]['o'],
                            high: lastdata["k"]['h'],
                            low: lastdata["k"]['l'],
                            close: lastdata["k"]['c']
                        })

                        setData(newData);
                }

                if (fetchedData.length > 0 && lastdata["k"]['o'] !== fetchedData[fetchedData.length-1]['open']) {
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

        document.getElementById('chartCryptoIntraday').innerHTML = '';
        if (fetchedData.length > 0) {
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
                    text: `UTC  ${props.symbol}`,
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

// markets = {'bnbbtc', 'ethbtc', 'btcusdt', 'bchabcusdt', 'xrpusdt', 'rvnbtc', 'ltcusdt', 'adausdt', 'eosusdt',
//            'neousdt', 'bnbusdt', 'adabtc', 'ethusdt', 'trxbtc', 'bchabcbtc', 'ltcbtc', 'xrpbtc',
//            'ontbtc', 'bttusdt', 'eosbtc', 'xlmbtc', 'bttbtc', 'tusdusdt', 'xlmusdt', 'qkcbtc', 'zrxbtc',
//            'neobtc', 'adaeth', 'icxusdt', 'btctusd', 'icxbtc', 'btcusdc', 'wanbtc', 'zecbtc', 'wtcbtc',
//            'batbtc', 'adabnb', 'etcusdt', 'qtumusdt', 'xmrbtc', 'trxeth', 'adatusd', 'trxxrp', 'trxbnb',
//            'dashbtc', 'rvnbnb', 'bchabctusd', 'etcbtc', 'bnbeth', 'ethpax', 'nanobtc', 'xembtc', 'xrpbnb',
//            'bchabcpax', 'xrpeth', 'bttbnb', 'ltcbnb', 'agibtc', 'zrxusdt', 'xlmbnb', 'ltceth', 'eoseth',
//            'ltctusd', 'polybnb', 'scbtc', 'steembtc', 'trxtusd', 'npxseth', 'kmdbtc', 'polybtc', 'gasbtc',
//            'engbtc', 'zileth', 'xlmeth', 'eosbnb', 'xrppax', 'lskbtc', 'npxsbtc', 'xmrusdt', 'ltcpax',
//            'ethtusd', 'batusdt', 'mcobtc', 'neoeth', 'bntbtc', 'eostusd', 'lrcbtc', 'funbtc', 'zecusdt',
//            'bnbpax', 'linkusdt', 'hceth', 'zrxeth', 'icxeth', 'xmreth', 'neobnb', 'etceth', 'zeceth', 'xmrbnb',
//            'wanbnb', 'zrxbnb', 'agibnb', 'funeth', 'arketh', 'engeth'}