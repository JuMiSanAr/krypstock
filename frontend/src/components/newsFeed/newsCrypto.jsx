import React, {useEffect, useState} from 'react';
// import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
// import {NewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import {CryptoHeadlineWrapper, CryptoNewsWrapper} from "../../styles/components/stockStyles/newsStyles";
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../styles/Themes';

const NewsCrypto = (props) => {

    const [allNews, setAllNews] = useState([]);
    const apiKey = "c9f83156011c478e9d57aafff581a35d"
    const symbol = (props.symbol).slice(0,3)

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
            {allNews.length > 0 ? allNews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((news, index) => {
                return (
                    <CryptoNewsWrapper key={index}>
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

export default NewsCrypto