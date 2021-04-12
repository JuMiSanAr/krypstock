import {iexSandboxKey} from "../../../store/constants";

export const cryptoFetcherIntraday = (symbol, setIntradayData, intradayData) => {

        const binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_1m`);

                binanceSocket.onmessage = event => {
                const lastdata= JSON.parse(event.data)
                const timestamp = lastdata["E"]/1000;
                    const data = intradayData.push({
                        time: timestamp,
                        open: lastdata["k"]['o'],
                        high: lastdata["k"]['h'],
                        low: lastdata["k"]['l'],
                        close: lastdata["k"]['c']
                    })
                setIntradayData(data);
            };
    }