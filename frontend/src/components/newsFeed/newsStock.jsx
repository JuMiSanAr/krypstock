import React, {useEffect, useState} from 'react';
// import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
// import {NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import {iexAPIKey, iexSandboxKey} from "../../store/constants";
import {CryptoHeadlineWrapper, CryptoNewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../styles/Themes';

const NewsStock = (props) => {

    const [allNews, setAllNews] = useState([]);
    const last = '5';

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 3;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        fetchNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchNews = () => {
        const API_Call = `https://sandbox.iexapis.com/stable/stock/${props.symbol}/news/last/${last}?token=${iexSandboxKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                setAllNews(data);
            });
    }

    return (
        <>
            <h3>Latest news about {props.companyName}</h3>
            {allNews.length > 0 ? allNews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((news, index) => {

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
                    // <ShrinkingComponentWrapper key={index}>
                    //     <NewsWrapper onClick={()=> window.open(news.url, "_blank")}>
                    //         <h3>{news.headline}</h3>
                    //         <p className='news_date'>{stringDate} - By {news.source}</p>
                    //     </NewsWrapper>
                    // </ShrinkingComponentWrapper>
                    <CryptoNewsWrapper key={index}>
                    <CryptoHeadlineWrapper>
                        <img onClick={()=> window.open(news.url, "_blank")} src={news.image} alt=""/>
                        <div>
                            <h3 onClick={()=> window.open(news.url, "_blank")}>{news.headline}</h3>
                            <div className="publishDetial">
                            <p className='news_date'>By {news.source}</p>
                            <p className='news_date'>{stringDate}</p>
                            </div>
                        </div>
                    </CryptoHeadlineWrapper>
                    </CryptoNewsWrapper>

                )
            })
            : ''
            }
             {
                 allNews &&  allNews.length !== 0 ?
                <TablePagination 
                    component="div"
                    count={ allNews.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
                : null
            }
        </>
    )
}

export default NewsStock

