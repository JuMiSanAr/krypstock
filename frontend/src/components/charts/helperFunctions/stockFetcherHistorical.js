import {iexSandboxKey} from "../../../store/constants";

export const stockFetcherHistorical = (symbol, updateState, timeframe) => {

        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeframe}?token=${iexSandboxKey}`;

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
                updateState(allData);
            });
    }