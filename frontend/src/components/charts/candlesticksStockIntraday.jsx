import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode, isBusinessDay} from "lightweight-charts";
/*import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";*/


const CandlestickStockIntraday = (props) => {

    // TEMP (Data will come from props)
    const [fetchedData, setData] = useState([]);
    const symbol = 'aapl';
    const chartLast = '20';
    const market = 'NASDAQ';

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = () => {
        const API_KEY = 'Tpk_fec97062db224c2fb7b0b3836ab0e365';
        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${API_KEY}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {

                const allData = data.map(obj => {

                    const ddmmyy = obj['date'].split('-');
                    const hours = obj['minute'].split(':');

                    const date = new Date(Date.UTC(ddmmyy[0],ddmmyy[1]-1,ddmmyy[2],hours[0],hours[1]));

                    const timestamp = date.getTime()/1000;

                    return {
                        time: timestamp,
                        open: obj['open'],
                        high: obj['high'],
                        low: obj['low'],
                        close: obj['close']
                    }
                })

                setData(allData);
            });
    }

    useEffect(() => {
        if (fetchedData.length > 0) {
            const chart = createChart(document.getElementById('chartStockIntraday'), {
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
                wickUpColor: 'rgb(39,148,0)'
            });

            chart.applyOptions({
                watermark: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    visible: true,
                    text: `Market: ${market}`,
                    fontSize: 10,
                    horzAlign: 'left',
                    vertAlign: 'bottom',
                },
                priceScale: {
                    autoScale: false,
                    invertScale: true,
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

    return (
        <>
           {/* <ShrinkingComponentWrapper>*/}
                <div id="chartStockIntraday"/>
          {/*  </ShrinkingComponentWrapper>*/}
        </>
    )
}

export default CandlestickStockIntraday