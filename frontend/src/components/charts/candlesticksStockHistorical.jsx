import React, {useEffect} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";

const CandlestickStockHistorical = (props) => {

    useEffect(() => {
        document.getElementById('chartStockHistorical').innerHTML = '';
        if (props.data) {
            const chart = createChart(document.getElementById('chartStockHistorical'), {
                localization: {
                    locale: 'en-US'
                },
                width: window.innerWidth-50,
                height: window.innerHeight-380,
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
                // borderDownColor: 'rgb(0,0,0)',
                // borderUpColor: 'rgb(0,0,0)',
                wickDownColor: 'rgb(131,14,14)',
                wickUpColor: 'rgb(39,148,0)',
            });

            chart.applyOptions({
                watermark: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    visible: true,
                    text: `Market: ${props.market}`,
                    fontSize: 10,
                    horzAlign: 'left',
                    vertAlign: 'bottom',
                },
                priceScale: {
                    autoScale: true,
                    alignLabels: false,
                    borderVisible: false,
                    borderColor: '#555ffd',
                    scaleMargins: {
                        top: 0.30,
                        bottom: 0.25,
                    },
                },
                timeScale: {
                    fixLeftEdge: true,
                    fixRightEdge: true,
                    lockVisibleTimeRangeOnResize: true,
                    borderVisible: false,
                    borderColor: '#fff000',
                    visible: true,
                    timeVisible: true,
                    secondsVisible: false,
                },
            });
            candleSeries.setData(props.data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data]);

    return (
        <>
            <div id="chartStockHistorical"/>
        </>
    )
}

export default CandlestickStockHistorical