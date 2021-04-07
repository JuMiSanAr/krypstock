import React, {useEffect, useState} from 'react';
import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import {NewsWrapper} from "../../styles/components/stockStyles/newsStyles";

const NewsStock = (props) => {

    const [allNews, setAllNews] = useState([]);

    const last = '10';
    const symbol = 'GOOGL';

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = () => {
        const API_KEY = 'Tpk_fec97062db224c2fb7b0b3836ab0e365';
        const API_Call = `https://sandbox.iexapis.com/stable/stock/${symbol}/news/last/${last}?token=${API_KEY}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                setAllNews(data);
            });
    }

    return (
        <>
            <h3>Latest news about {symbol}</h3>
            {allNews.length > 0 ? allNews.map((news, index) => {
                return (
                    <ShrinkingComponentWrapper key={index}>
                        <NewsWrapper>
                            <h3>{news.headline}</h3>
                        </NewsWrapper>
                    </ShrinkingComponentWrapper>
                )
            })
            : ''
            }
        </>
    )
}

export default NewsStock