import React from 'react';
import { NewsWrapper, HeadlineWrapper, DateAuthorWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import Graph from "../../../assets/stock_graph.png";


const News = ({stock_news}) => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Latest News</h3>


                {
                    stock_news.map((news, index) => {

                        const date = new Date(news.datetime);

                        const dateOptions = {
                            weekday: 'long',
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }

                    const publishDate = date.toLocaleString('en-US', dateOptions);

                         return (
                              <NewsWrapper key={index}>
                                 <DateAuthorWrapper>
                                     <span>{publishDate}</span>
                                     <span>- By {news.source}</span>
                                 </DateAuthorWrapper>
                                 <HeadlineWrapper>
                                      <img src={news.image} />
                                     <a className="headline" href={news.url}>
                                         {news.headline}
                                     </a>
                                 </HeadlineWrapper>
                             </NewsWrapper>

                         )
                        }

                    )
                }

        </ShrinkingComponentWrapper>
    )
}

export default News;