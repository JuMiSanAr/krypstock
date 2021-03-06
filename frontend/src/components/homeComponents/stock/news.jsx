import React, {useState} from 'react';
// import { NewsWrapper, HeadlineWrapper, DateAuthorWrapper} from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
// import Graph from "../../../assets/stock_graph.png";
import {CryptoHeadlineWrapper, CryptoNewsWrapper  } from '../../../styles/components/stockStyles/newsStyles';
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';

const News = ({stock_news}) => {
  //Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;
  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Latest News</TitleSpan>
                {
                    stock_news && stock_news.length > 0 ?
                    stock_news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((news, index) => {

                        const date = new Date(news.datetime);

                        const dateOptions = {
                            weekday: 'long',
                            // year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }

                        const publishDate = date.toLocaleString('en-US', dateOptions);

                         return (
                            //   <NewsWrapper key={index}>
                            //      <DateAuthorWrapper>
                            //          <span>{publishDate}</span>
                            //          <span>- By {news.source}</span>
                            //      </DateAuthorWrapper>
                            //      <HeadlineWrapper>
                            //           <img src={news.image} />
                            //          <a className="headline" href={news.url}>
                            //              {news.headline}
                            //          </a>
                            //      </HeadlineWrapper>
                            //  </NewsWrapper>    
                            <CryptoNewsWrapper key={index}>
                            <CryptoHeadlineWrapper>
                                <img onClick={()=> window.open(news.url, "_blank")} src={news.urlToImage} alt=""/>
                                <div>
                                    <h3 onClick={()=> window.open(news.url, "_blank")}>{news.headline}</h3>
                                    <div className="publishDetial">
                                    <p className='news_date'>By {news.source}</p>
                                    <p className='news_date'>{publishDate}</p>
                                    </div>
                                </div>
                                </CryptoHeadlineWrapper>
                            </CryptoNewsWrapper>

                         )
                        }
                    )
                    : 
                    <span>No information available</span>
                }
                {
                 stock_news &&  stock_news.length > 0 ?
                <TablePagination 
                    component="div"
                    count={ stock_news.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
                : null
                }
        </ShrinkingComponentWrapper>
    )
}

export default News;