// import { DoubleButtonContainer, LeftButton, MainContentWrapper, RightButton } from "../styles/pages/homeStyles";
import React, { useEffect, useState } from "react";
import { iexSandboxKey } from "../store/constants";
import { stockNewsAction } from "../store/actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
// import NewsStock from "../components/newsFeed/newsStock";
import SingleStockNewsFeed from "../components/newsFeed/singleStockNewsFeed";
import { ShowMore, HeroHeader, NewsContentWrapper, HeaderTitle } from '../styles/components/stockStyles/newsStyles'
import SingleCryptoNewsFeed from "../components/newsFeed/singleCryptoNews";
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';
import { ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {DoubleButtonContainer, LeftButton, RightButton} from '../styles/pages/homeStyles';

const NewsPage = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const apiKey = "c9f83156011c478e9d57aafff581a35d"
    const symbol = "crypto"

    const [newsNumberShown, setNewsNumberShown] = useState(9);
    const [crytoNews, setCryptoNews] = useState([]);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const allStockNews = useSelector(state => state.newsReducer.stockNews);

    useEffect(() => {
        fetchStockNews();
        fetchCryptoNews();
    }, []);

    const fetchStockNews = () => {
        const API_Call = `https://sandbox.iexapis.com/stable/time-series/news?range=1m&limit=30&token=${iexSandboxKey}`;

        if (allStockNews.length === 0) {
            fetch(API_Call)
                .then(res => res.json())
                .then(data => {
                    const action = stockNewsAction(data);
                    dispatch(action);
                });
        }
    }


    const fetchCryptoNews = () => {

        const API_Call = `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${apiKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                setCryptoNews(data.articles);
            });
    }

    return (
        <>
            <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                    <h2>News</h2>
                </div>
            </NaviWrapper>
            <h1>News</h1> 
                <DoubleButtonContainer>
                    <LeftButton onClick={() => toggleTab(1)} numberClicked={toggleState}>Stock</LeftButton>
                    <RightButton onClick={() => toggleTab(2)} numberClicked={toggleState}>Crypto</RightButton>
                </DoubleButtonContainer> 
          
            {/* <HeaderTitle>
                <div className="toggleTitle">
                    <span>/</span>
                    <h3 onClick={() => toggleTab(1)} numberClicked={toggleState}>Crypto</h3>
                    <span>/</span>
                    <h3 onClick={() => toggleTab(2)} numberClicked={toggleState}>Stock</h3>
                </div>
            </HeaderTitle> */}
            <ShrinkingComponentWrapper>
                <NewsContentWrapper>
                    {
                        allStockNews.length > 0 && toggleState === 2 ?
                            allStockNews.slice(0, newsNumberShown).map((news, index) => {
                                return (
                                    <SingleStockNewsFeed key={index} news={news} />
                                )
                            })
                            : ''
                    }
                    {
                        crytoNews.length > 0 && toggleState === 1 ?
                            crytoNews.slice(0, newsNumberShown).map((news, index) => {
                                return (
                                    <SingleCryptoNewsFeed key={index} news={news} />
                                )
                            })
                            : ''
                    }
                </NewsContentWrapper>
                <ShowMore>
                    {
                        newsNumberShown < 30 ?
                            <h3 onClick={() => setNewsNumberShown(newsNumberShown + 5)}>Show more</h3>
                            : ''
                    }
                </ShowMore>
            </ShrinkingComponentWrapper>
        </>
    )
}

export default NewsPage