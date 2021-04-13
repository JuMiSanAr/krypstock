import React, {useEffect, useState} from 'react';
// import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
// import {NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import {CryptoHeadlineWrapper, CryptoNewsWrapper} from "../../styles/components/stockStyles/newsStyles";
const NewsCrypto = (props) => {

    const [allNews, setAllNews] = useState([]);
    const apiKey = "c9f83156011c478e9d57aafff581a35d"
    const symbol = (props.symbol).slice(0,3)

    const [newsNumberShown, setNewsNumberShown] = useState(2);

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
            <h3>Latest news about {(props.symbol).toUpperCase()}</h3>
            {allNews.length > 0 ? allNews.slice(0, newsNumberShown).map((news, index) => {
                return (
                    // <ShrinkingComponentWrapper key={index}>
                    //     <NewsWrapper>
                    //         <h3>{news.title}</h3>
                    //         <h6>{news.description}</h6>
                    //         <img src={news.urlToImage}/>
                    //         <p className='news_date'>{news.publishedAt} - By {news.author} from {news.source.name}</p>
                    //         <a href={news.url} target='_blank' rel='noreferrer'>Click here to see the complete article</a>
                    //     </NewsWrapper>
                    // </ShrinkingComponentWrapper>
                    <CryptoNewsWrapper>
                    <CryptoHeadlineWrapper>
                        <img onClick={()=> window.open(news.url, "_blank")} src={news.urlToImage} alt=""/>
                        <div>
                            <h3 onClick={()=> window.open(news.url, "_blank")}>{news.title}</h3>
                            <div className="publishDetial">
                            <p className='news_date'>By {news.author}</p>
                            <p className='news_date'>{news.publishedAt}</p>
                            </div>
                        </div>
                    </CryptoHeadlineWrapper>
                    </CryptoNewsWrapper>
                )
            })
            : ''
            }
               {/* <ShowMore> */}
            {
                    newsNumberShown < 30 ?
                        <h3 onClick={() => setNewsNumberShown(newsNumberShown+5)}>Show more</h3>
                        : ''
            }
            {/* </ShowMore> */}
        </>
    )
}

export default NewsCrypto