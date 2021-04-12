import {iexAPIKey, iexSandboxKey} from "../../../store/constants";

export const stockFetcherIntraday = (symbol, updateState) => {

        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${iexSandboxKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                let nullFetch = false;
                const allData = [];

                data.forEach(obj => {

                    const ddmmyy = obj['date'].split('-');
                    const hours = obj['minute'].split(':');

                    const date = new Date(Date.UTC(ddmmyy[0],ddmmyy[1]-1,ddmmyy[2],hours[0],hours[1]));

                    const timestamp = date.getTime()/1000;

                    if (obj['open']) {
                        allData.push( {
                            time: timestamp,
                            open: obj['open'],
                            high: obj['high'],
                            low: obj['low'],
                            close: obj['close']
                        });
                    }
                    else if (obj['marketOpen']) {
                        allData.push( {
                            time: timestamp,
                            open: obj['marketOpen'],
                            high: obj['marketHigh'],
                            low: obj['marketLow'],
                            close: obj['marketClose']
                        });
                    }
                    else {
                        nullFetch = true;
                    }
                })

                if (!nullFetch) {
                    updateState(allData);
                }
                else {
                    updateState(null);
                }

                // let nullValues = false;
                //
                // allData.forEach(obj => {
                //     if (obj['open'] === null) {
                //         nullValues = true;
                //     }
                // });
                //
                // if (nullValues) {
                //     updateState(null);
                // }
                // else {
                //     updateState(allData);
                // }
            });
    }