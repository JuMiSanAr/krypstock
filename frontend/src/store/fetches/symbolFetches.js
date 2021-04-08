import {iexSandboxKey} from "../constants";


const SymbolFetch = () => {
    console.log("hello")
    const Symbol_API_Call = `https://sandbox.iexapis.com/stable/ref-data/symbols?token=${iexSandboxKey}`;
   return fetch(Symbol_API_Call)
        .then(res => res.json())
        .then(data =>
            console.log("from symbol fetch", data)
        )
}

export default SymbolFetch