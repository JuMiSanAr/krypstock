import React from 'react'
import { NewsWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

export const CryptoNews = () => {
    return (
        <ShrinkingComponentWrapper>
        <h3>Latest News</h3>
        <NewsWrapper>
            <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
            <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
            <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
            <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
            <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
            <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
        </NewsWrapper>
    </ShrinkingComponentWrapper>
    )
}
