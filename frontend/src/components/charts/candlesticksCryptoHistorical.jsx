import React, {useEffect, useState} from 'react';
import {createChart, CrosshairMode} from "lightweight-charts";


const CandlestickCryptoHistorical = (props) => {

   // TEMP (Data will come from props)
    const [fetchedData, setData] = useState([]);
    const cryptoCurrency= props.symbol?(props.symbol).toUpperCase():'BTCUSDT';

    useEffect(() => {
        FetchCrypto();
    }, []);

    useEffect(() => {
        if(props.timeLength!=='1d'){
          FetchCrypto();
        }
    }, [props.timeLength]);

    const FetchCrypto = () => {
        var d = new Date();
        // console.log(props.timeLength)
      if(props.timeLength==='1w'){
            let fixedDay=d.getDate();
            if (fixedDay>=7){
                d.setDate(d.getDate()-7);
            }else{
                d.setMonth(d.getMonth() - 1)
                d.setDate(d.getDate()-7);
            }
        }else if(props.timeLength==='1m'){
            let fixedMonth=d.getDate();
            if (fixedMonth>=1){
                d.setMonth(d.getMonth() - 1);
            }else{
                d.setFullYear(d.getFullYear()-1)
                d.setMonth(d.getMonth() - 1);
            }
        }else if(props.timeLength==='3m') {
            let fixedMonth = d.getDate();
            if (fixedMonth >= 3) {
                d.setMonth(d.getMonth() - 3);
            } else {
                d.setFullYear(d.getFullYear() - 1)
                d.setMonth(d.getMonth() - 3);
            }
        }else if(props.timeLength==='6m'){
            let fixedMonth=d.getDate();
            if (fixedMonth>=6){
                d.setMonth(d.getMonth() - 6);
            }else{
                d.setFullYear(d.getFullYear()-1)
                d.setMonth(d.getMonth() - 6);
            }
        }else if(props.timeLength==='1y'){
                d.setFullYear(d.getFullYear()-1)
        }else if(props.timeLength==='5y'){
                d.setFullYear(d.getFullYear()-5)
        }
        const timestamp = d.getTime();

        const API_Call = `https://api.binance.com/api/v3/klines?symbol=${cryptoCurrency}&interval=${props.time}&startTime=${timestamp}`;
        const config = {
                  mode: 'no-cors',
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "true"
                  }
                }

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
                // borderDownColor: 'rgb(0,0,0)',
                // borderUpColor: 'rgb(0,0,0)',
                wickDownColor: 'rgb(131,14,14)',
                wickUpColor: 'rgb(39,148,0)',
            });

            chart.applyOptions({
                watermark: {
                    color: 'rgba(255, 255, 255, 0.4)',
                    visible: true,
                     text: `Market: ${props.symbol} Interval:${props.time}`,
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


