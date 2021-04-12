import {iexSandboxKey} from "../../../store/constants";

export const cryptoFetcherHistorical = (symbol, setHistoricalData, tick_interval) => {

        const API_Call = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${tick_interval}`;

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
                setHistoricalData(allData);
            });
    }