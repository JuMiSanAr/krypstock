import React, {useEffect} from 'react';
import {iexSandboxKey} from "../../store/constants";

const StockPageInfoCard = (props) => {

    useEffect(() => {
        fetchStockInfo();
    }, []);

    const fetchStockInfo = () => {
        const API_Call = `https://sandbox.iexapis.com/stable/stock/${props.symbol}/intraday-prices?token=${iexSandboxKey}`;
    }

    return (
        <h1>HELLOOO</h1>
    )
}

export default StockPageInfoCard