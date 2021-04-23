import React, { useEffect, useState } from 'react'
import { CryptoHeadlineWrapper, CryptoNewsWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import TablePagination from '@material-ui/core/TablePagination';
import { darkTheme } from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';


export const CryptoNewsApiAi = ({symbol}) => {

    const [allNews, setAllNews] = useState([]);
    const apiKeyAi = "919a6de0-17d5-49df-b7c9-55de20989583"

    const fetchNews = () => {
      const API_Call = `https://eventregistry.org/api/v1/article/getArticles?apiKey=919a6de0-17d5-49df-b7c9-55de20989583`;
      const method = 'POST';
      const body = {
        action: "getArticles",
        keyword: [symbol.slice(0,-4).toUpperCase()],
        articlesPage: 1,
        articlesCount: 5,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        articlesArticleBodyLen: -1,
        ignoreKeyword: 'Read More',
        ignoreAuthorUri: 'explica_co@explica.co',
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
      fetch(API_Call, config)
                .then(res => res.json())
                .then(data => {
                    setAllNews(data.articles.results)
                });
    }


    const [page, setPage] = useState(0);
    const rowsPerPage = 3;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        if(symbol){
            fetchNews();
        }
    }, [symbol]);

    return (
        <>
            <ShrinkingComponentWrapper >
                 <TitleSpan>Latest News</TitleSpan>
                    {allNews.length > 0 ? allNews.map((news, index) => {
                        return (
                        <CryptoNewsWrapper key={index}>
                            <CryptoHeadlineWrapper>
                                <img onClick={() => window.open(news.url, "_blank")} src={news.image ? news.image : 'https://res.cloudinary.com/tennam/image/upload/v1619100648/Propulsion/default-pshe-square.jpg'} alt="" />
                                <div>
                                    <h3 onClick={() => window.open(news.url, "_blank")}>{news.title}</h3>
                                    <div className="publishDetial">
                                        <p className='news_date'>By {news.source.title}</p>
                                        <p className='news_date'> {news.dateTimePub}</p>
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

