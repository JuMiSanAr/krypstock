import React, {useEffect, useState} from 'react'
import { NewsWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

export const CryptoNews = () => {

    const [allNews, setAllNews] = useState([]);
    const apiKey = "c9f83156011c478e9d57aafff581a35d"
    const symbol = "crypto"

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = () => {

        const API_Call = `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${apiKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                    setAllNews(data.articles);
                });
    }

    return (
        <>
            <h3>Latest News</h3>
            {allNews.length > 0 ? allNews.map((news, index) => {
                return (
                    <ShrinkingComponentWrapper key={index}>

                        <NewsWrapper>
                            <h3>{news.title}</h3>
                            <h6>{news.description}</h6>
                            <img src={news.urlToImage}/>
                            <p className='news_date'>{news.publishedAt} - By {news.author} from {news.source.name}</p>
                            <a href={news.url} target='_blank' rel='noreferrer'>Click here to see the complete article</a>
                        </NewsWrapper>
                    </ShrinkingComponentWrapper>
                )
            })
            : ''
            }
        </>
    )

}
//     return (
//         <ShrinkingComponentWrapper>
//         <h3>Latest News</h3>
//         <NewsWrapper>
//             <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
//             <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
//             <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
//             <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
//             <a className="headline" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Stock market news live updates: Stock futures trade higher, shaking off earlier declines"}</a>
//             <a className="source" href="https://finance.yahoo.com/news/stock-market-news-live-updates-april-7-2021-221305239-221231308.html">{"Bloomberg"}</a>
//         </NewsWrapper>
//     </ShrinkingComponentWrapper>
//     )
// }
