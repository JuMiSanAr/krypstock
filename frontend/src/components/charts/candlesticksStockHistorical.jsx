import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";
import {iexSandboxKey} from "../../store/constants";
// import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";


const CandlestickStockHistorical = (props) => {

    // TEMP (Data will come from props)
    const [fetchedData, setData] = useState([]);

    const symbol = 'twtr';
    const market = 'NASDAQ';

    console.log(props.timeframe)

    useEffect(() => {
        fetchStock();
    }, []);

    useEffect(() => {
        fetchStock();
    }, [props.timeframe])

    const fetchStock = () => {
        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${props.timeframe}?token=${iexSandboxKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {

                const allData = data.map(obj => {

                    return {
                        time: obj['date'],
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
        document.getElementById('chartStockHistorical').innerHTML = '';
        if (fetchedData.length > 0) {
            const chart = createChart(document.getElementById('chartStockHistorical'), {
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
            {/* <ShrinkingComponentWrapper> */}
                <div id="chartStockHistorical"/>
            {/* </ShrinkingComponentWrapper> */}
        </>
    )
}

export default CandlestickStockHistorical