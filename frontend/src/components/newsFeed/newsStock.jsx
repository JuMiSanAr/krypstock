import React, {useEffect, useState} from 'react';

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
    console.log(allNews)
    return (
        <div>
            {allNews.length > 0 ? allNews.map((news, index) => {
                return (
                    <h1 key={index}>{news.headline}</h1>
                )
            })
            : ''
            }
        </div>
    )
}

export default NewsStock