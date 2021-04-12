import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import {HeadlineWrapper, NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import React from "react";


const SingleStockNewsFeed = ({news}) => {


    const date = new Date(news.datetime);

    const dateOptions = {
    weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
    }

    const stringDate = date.toLocaleString('en-US', dateOptions);

    return (
        <ShrinkingComponentWrapper>
            <NewsWrapper onClick={()=> window.open(news.url, "_blank")}>
                <HeadlineWrapper>
                    <img src={news.image} />
                    <div>
                        <h3>{news.headline}</h3>
                        <p className='news_date'>{stringDate}</p>
                        <p className='news_date'>By {news.source}</p>
                    </div>
                </HeadlineWrapper>
            </NewsWrapper>
        </ShrinkingComponentWrapper>
    )
}

export default SingleStockNewsFeed