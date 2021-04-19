import React, { useEffect, useState } from 'react'
import { CryptoHeadlineWrapper, CryptoNewsWrapper } from '../../../styles/components/stockStyles/newsStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import TablePagination from '@material-ui/core/TablePagination';
import { darkTheme } from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';
import {EventRegistry, QueryArticlesIter} from "eventregistry";


export const CryptoNewsApiAi = (props) => {

    const [allNews, setAllNews] = useState([]);
    const apiKeyAi = "919a6de0-17d5-49df-b7c9-55de20989583"

    var ers = require("eventregistry");

    const er = new EventRegistry({apiKey: apiKeyAi});

    er.getConceptUri("Bitcoin").then((conceptUri) => {
    const q = new QueryArticlesIter(er, {conceptUri: conceptUri, sortBy: "date"});
    q.execQuery((item) => {
        console.info(item);
    })
    });

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 3;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = () => {
    }

    return (
        <>
            <ShrinkingComponentWrapper >
                <TitleSpan>Latest News</TitleSpan>
                {allNews.length > 0 ? allNews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((news, index) => {
                    return (

                        <CryptoNewsWrapper key={index}>
                            <CryptoHeadlineWrapper>
                                <img onClick={() => window.open(news.url, "_blank")} src={news.urlToImage} alt="" />
                                <div>
                                    <h3 onClick={() => window.open(news.url, "_blank")}>{news.title}</h3>
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

