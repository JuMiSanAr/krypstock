import {iexAPIKey, iexSandboxKey} from "../../../store/constants";

export const stockFetcherHistorical = (symbol, updateState, timeframe='5dm') => {

        let historicalStock_API_Call = '';

        if (timeframe === '5dm') {
            historicalStock_API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeframe}?token=${iexSandboxKey}&chartInterval=2`;
        }
        else if (timeframe === '1mm') {
            historicalStock_API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeframe}?token=${iexSandboxKey}&chartInterval=4`;
        }
        else {
            historicalStock_API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeframe}?token=${iexSandboxKey}`;
        }

        fetch(historicalStock_API_Call)
            .then(res => res.json())
            .then(data => {

                const allData = data.map(obj => {

                    if (timeframe === '5dm' || timeframe === '1mm') {
                        const ddmmyy = obj['date'].split('-');
                        const hours = obj['minute'].split(':');

                        const date = new Date(Date.UTC(ddmmyy[0],ddmmyy[1]-1,ddmmyy[2],hours[0],hours[1]));

                        const timestamp = date.getTime()/1000;

                        if (obj['open']) {
                            return {
                                time: timestamp,
                                open: obj['open'],
                                high: obj['high'],
                                low: obj['low'],
                                close: obj['close']
                            }
                        } else if (obj['marketOpen']) {
                            return {
                                time: timestamp,
                                open: obj['marketOpen'],
                                high: obj['marketHigh'],
                                low: obj['marketLow'],
                                close: obj['marketClose']
                            }
                        }
                    }
                    else {
                        if (obj['open']) {
                            return {
                                time: obj['date'],
                                open: obj['open'],
                                high: obj['high'],
                                low: obj['low'],
                                close: obj['close']
                            }
                        } else if (obj['marketOpen']) {
                            return {
                                time: obj['date'],
                                open: obj['marketOpen'],
                                high: obj['marketHigh'],
                                low: obj['marketLow'],
                                close: obj['marketClose']
                            }
                        }
                    }
                });

                updateState(allData);
            });
    }