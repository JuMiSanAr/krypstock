import {HeadlineWrapper, NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import React from "react";


const SingleCryptoNewsFeed = ({news}) => {

    return (
        <NewsWrapper>
        <HeadlineWrapper>
            <img onClick={()=> window.open(news.url, "_blank")} src={news.image} alt=""/>
            <div>
                <h3 onClick={()=> window.open(news.url, "_blank")}>{news.title}</h3>
                <div className="summary">
                    <p>{news.description}</p>
                </div>
                <div className="publishDetial">
                <p className='news_date'>By {news.source.title}</p>
                <p className='news_date'>{news.dateTimePub}</p>
                </div>
            </div>
        </HeadlineWrapper>
    </NewsWrapper>
    
    )
}

export default SingleCryptoNewsFeed