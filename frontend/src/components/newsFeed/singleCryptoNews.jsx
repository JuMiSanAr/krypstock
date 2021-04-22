import {HeadlineWrapper, NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import React from "react";


const SingleCryptoNewsFeed = ({news}) => {

    return (
        <NewsWrapper>
        <HeadlineWrapper>
            <img onClick={()=> window.open(news.url, "_blank")} src={news.urlToImage} alt=""/>
            <div className='news-item-text'>
                <h3 onClick={()=> window.open(news.url, "_blank")}>{news.title}</h3>
                <div className="summary">
                    <p>{news.description}</p>
                </div>
                <div className="publishDetial">
                <p className='news_date'>By {news.author}</p>
                <p className='news_date'>{news.publishedAt}</p>
                </div>
            </div>
        </HeadlineWrapper>
    </NewsWrapper>
    
    )
}

export default SingleCryptoNewsFeed