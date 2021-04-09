import React, {useEffect, useState} from 'react';
import {stockFetcherInfo} from "../charts/helperFunctions/stockFetcherInfo";
import {StockPageInfoItemWrapper, StockPageInfoWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";

const StockPageInfoCard = (props) => {

    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        stockFetcherInfo(props.symbol, setStockInfo);
    }, []);

    useEffect(() => {
        props.setCompanyName(stockInfo.companyName);
    }, [stockInfo]);

    console.log(stockInfo)

    return (
        <StockPageInfoWrapper>
            <StockPageInfoItemWrapper>
                <p>Symbol: <span>{stockInfo.symbol}</span></p>
            </StockPageInfoItemWrapper>
            <StockPageInfoItemWrapper>
                <p>Country: <span>{stockInfo.country}</span></p>
            </StockPageInfoItemWrapper>
            <StockPageInfoItemWrapper>
                <p>Exchange: <span>{stockInfo.exchange}</span></p>
            </StockPageInfoItemWrapper>
            <StockPageInfoItemWrapper>
                <p>Symbol: <span>{stockInfo.symbol}</span></p>
            </StockPageInfoItemWrapper>
        </StockPageInfoWrapper>
    )
}

export default StockPageInfoCard