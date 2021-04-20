import React, { useEffect, useState } from 'react'
import { CryptoHeadlineWrapper, CryptoNewsWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import TablePagination from '@material-ui/core/TablePagination';
import { darkTheme } from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';
import {iexSandboxKey} from "../../../store/constants";
import {stockNewsAction} from "../../../store/actions/newsActions";


export const CryptoNewsApiAi = (props) => {

    const [allNews, setAllNews] = useState([]);
    const apiKeyAi = "919a6de0-17d5-49df-b7c9-55de20989583"

    const fetchNews = () => {
      const API_Call = `http://eventregistry.org/api/v1/article/getArticles?apiKey=919a6de0-17d5-49df-b7c9-55de20989583`;
      const method = 'POST';
      const body = {
        action: "getArticles",
        keyword: [(props.symbol).slice(0,-4).toUpperCase(),(props.symbol).slice(0,-4).toLowerCase(),(props.symbol).toUpperCase(),(props.symbol).toLowerCase()],
        articlesPage: 1,
        articlesCount: 5,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        articlesArticleBodyLen: -1,
        resultType: "articles",
        dataType: [
          "news",
          "pr"
        ],
        lang: "eng",
        apiKey: "919a6de0-17d5-49df-b7c9-55de20989583",
        forceMaxDataTimeWindow: 31
      };
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
      const config = {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
      };
      console.log(JSON.stringify(body))
      fetch(API_Call, config)
                .then(res => res.json())
                .then(data => {
                    // allNews.push(data.articles.results)
                    //          console.log(" data",data.articles.results)
                    setAllNews(data.articles.results)
                });
    }


    const [page, setPage] = useState(0);
    const rowsPerPage = 3;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        fetchNews();
    }, []);

        console.log(" allNews",allNews)
    return (
        <>
            <ShrinkingComponentWrapper >
                 <TitleSpan>Latest News</TitleSpan>
                    {allNews.length > 0 ? allNews.map((news, index) => {
                        return (
                        <CryptoNewsWrapper key={index}>
                            <CryptoHeadlineWrapper>
                                <img onClick={() => window.open(news.url, "_blank")} src={news.image} alt="" />
                                <div>
                                    <h3 onClick={() => window.open(news.url, "_blank")}>{news.title}</h3>
                                    <div className="publishDetial">
                                        <p className='news_date'>By {news.source.title}</p>
                                        <p className='news_date'>{news.dateTimePub}</p>
                                    </div>
                                </div>
                            </CryptoHeadlineWrapper>
                        </CryptoNewsWrapper>

                    )
                })
                    : ''
                }
                {
                    allNews && allNews.length !== 0 ?
                        <TablePagination
                            component="div"
                            count={allNews.length}
                            page={page}
                            onChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[]}
                            style={{ color: darkTheme.text }}
                        />
                        : null
                }
            </ShrinkingComponentWrapper>
        </>
    )

}

