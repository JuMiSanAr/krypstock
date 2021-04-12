import React, {useEffect, useState} from 'react';
import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import {NewsWrapper} from "../../styles/components/stockStyles/newsStyles";

const NewsCrypto = (props) => {

    const [allNews, setAllNews] = useState([]);

    const last = '5';

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = () => {
          const API_Call = `https://cryptopanic.com/api/v1/posts/?auth_token=6f333ed50f0e1e4679a65139765f56c00853296f&kind=news`;

           const config = {
               mode: 'no-cors',
               headers: {
                   "Content-Type": "application/json",
                   "Access-Control-Allow-Credentials": "true"
               }
           }
        console.log(config)
        fetch(API_Call,config)
            .then(res => res.json())
            .then(data => {
                console.log(data.event)
                setAllNews(data);
                console.log(allNews);
            });
    }

        //  const config = {
        //           mode: 'no-cors',
        //           headers: {
        //             "Content-Type": "application/json",
        //             "User-Agent": "kryptostock",
        //             "Access-Control-Allow-Credentials": "true"
        //           }
        //         }
        //
        // fetch(API_Call,config)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.event)
        //         setAllNews(data);
        //     });
    // }

    return (
        <>
            <h3>Latest news about {props.symbol}</h3>
            {allNews.length > 0 ? allNews.map((news, index) => {

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
                    <ShrinkingComponentWrapper key={index}>
                        <NewsWrapper>
                            <h3>{news.headline}</h3>
                            <p className='news_date'>{stringDate} - By {news.source}</p>
                            <a href={news.url} target='_blank' rel='noreferrer'>Click here to see the complete article</a>
                        </NewsWrapper>
                    </ShrinkingComponentWrapper>
                )
            })
            : ''
            }
        </>
    )
}

export default NewsCrypto

    // const method = 'GET';
          // const body = {};
          // const headers = new Headers({
          // 'Content-Type': 'application/json'
          //    });
          // const config = {
          // mode: 'no-cors',
          // method: method,
          // headers: headers,
          // body: JSON.stringify(body)
          // };