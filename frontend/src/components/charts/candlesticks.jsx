import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";


const CandlestickChart = (props) => {

    // TEMP (Data will come from props)
    const [fetchedData, setData] = useState([])

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = () => {
        const API_KEY = 'pk_f999055e78bd448c98560aa04b177782';
        const API_Call = `https://cloud.iexapis.com/stable/stock/BAC/intraday-prices?token=${API_KEY}&chartLast=20`;

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
            const chart = createChart(document.getElementById('chart'), {
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

            candleSeries.setData(fetchedData);
        }
    }, [fetchedData]);




    return (
        <>
            <div id="chart"/>
        </>
    )
}

export default CandlestickChart