import {iexAPIKey, iexSandboxKey} from "../../../store/constants";


export const stockFetcherInfo = (symbol, updateState) => {

        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=${iexSandboxKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                updateState(data);
            });
}