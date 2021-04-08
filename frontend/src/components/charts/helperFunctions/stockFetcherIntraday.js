import {iexAPIKey, iexSandboxKey} from "../../../store/constants";

export const stockFetcherIntraday = (symbol, updateState) => {

        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${iexSandboxKey}&chartInterval=5`;

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

                let nullValues = false;

                allData.forEach(obj => {
                    if (obj['open'] === null) {
                        nullValues = true;
                    }
                });

                if (nullValues) {
                    updateState(null);
                }
                else {
                    updateState(allData);
                }
            });
    }