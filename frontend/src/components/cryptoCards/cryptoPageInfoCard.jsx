import React, {useEffect, useState} from 'react';
import {iexSandboxKey} from "../../store/constants";
import {CryptoPageInfoWrapper} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";


const CryptoPageInfoCard = (props) => {
    const [fetchedData,setData]=useState([])
    const symbol = (props.symbol).slice(0,-4).toUpperCase()
    console.log(symbol)
    // const InfoCard = () => {
    //     fetch('https://api.binance.com/api/v3/ticker/24hr')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const allData = data.map((obj,index) => {
    //                 const cryptoSymbol=obj.symbol
    //                 const c=props.symbol
    //                     if(c===cryptoSymbol){
    //                         fetchedData.push(obj)
    //                 } return {
    //                 }
    //             })
    //             console.log('fetched data',fetchedData["symbol"])
    //         });
    // }

    const InfoCardCoinMarketCap = () => {
        const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}&CMC_PRO_API_KEY=4e360fa9-d8b1-4808-878a-68a47651ead2`
        const method = 'GET';
      const body = {
        // symbol:`${symbol}`,
        // CMC_PRO_API_KEY: "4e360fa9-d8b1-4808-878a-68a47651ead2",
      };
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
      const config = {
          mode: 'no-cors',
          method: method,
          headers: headers,
          // body: JSON.stringify(body)
      };

        fetch(apiUrl,config)
            .then(res => console.log(res))
            // .then(data => {
            //     console.log(data)
            //     setData(data.data)
            //     console.log('fetched data',fetchedData["description"])
            // });
    }

    useEffect(() => {
        // InfoCard();
        InfoCardCoinMarketCap();
    }, []);

    return (
        <CryptoPageInfoWrapper>
            <tbody>
                <tr>
                    <td className='key'><h1>{props.symbol}</h1></td>
                </tr>
            </tbody>
        </CryptoPageInfoWrapper>
    )
}

export default CryptoPageInfoCard