import FooterNav from "../components/footerNav"
import {DoubleButtonContainer, LeftButton, MainContentWrapper, RightButton} from "../styles/pages/homeStyles";
import React, {useEffect, useState} from "react";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import {iexSandboxKey} from "../store/constants";
import {stockNewsAction} from "../store/actions/newsActions";
import {useDispatch, useSelector} from "react-redux";
import NewsStock from "../components/newsFeed/newsStock";
import SingleStockNewsFeed from "../components/newsFeed/singleStockNewsFeed";


const NewsPage = () => {

    const dispatch = useDispatch();

    const [newsNumberShown, setNewsNumberShown] = useState(10);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

    const allStockNews = useSelector(state => state.newsReducer.stockNews);

    useEffect(() => {
        fetchStockNews();
    }, []);

    const fetchStockNews = () => {
        const API_Call = `https://sandbox.iexapis.com/stable/time-series/news?range=1m&limit=50&token=${iexSandboxKey}`;

        fetch(API_Call)
            .then(res => res.json())
            .then(data => {
                const action = stockNewsAction(data);
                dispatch(action);
            });
    }

    return (
        <>
            <AllComponentsWrapper>
                <h1>News</h1>
                <DoubleButtonContainer>
                    <LeftButton onClick={() => toggleTab(1)} numberClicked={toggleState}>Stock</LeftButton>
                    <RightButton onClick={() => toggleTab(2)} numberClicked={toggleState}>Crypto</RightButton>
                </DoubleButtonContainer>
                {
                    allStockNews.length > 0 && toggleState === 1 ?
                        allStockNews.slice(0, newsNumberShown).map((news, index) => {
                            return (
                                <SingleStockNewsFeed key={index} news={news}/>
                            )
                        })
                        : ''
                }
                {
                    newsNumberShown < 50 ?
                        <h3 onClick={() => setNewsNumberShown(newsNumberShown+10)}>Show more</h3>
                        : ''
                }
            </AllComponentsWrapper>
        </>
    )
}

export default NewsPage