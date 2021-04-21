import React, {useEffect, useState} from 'react';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import { FormSelectWrapper, GraphWrapper } from "../styles/components/cryptoStyles/bitCoinStyles";
import { AllComponentsWrapper, ShrinkingComponentWrapper } from "../styles/globalParts/containerStyles";
import CandlestickCryptoHistorical from "../components/charts/candlesticksCryptoHistorical";
import ChartTimeCrypto from "../components/charts/chartSelectTimeCrypto";
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';
import CryptoPageInfoCard from "../components/cryptoCards/cryptoPageInfoCard";
import PortfoliosWithStock from "../components/stockCards/portfoliosWithStock";
import {CryptoNewsApiAi} from "../components/homeComponents/crypto/cryptoNewsApiAi";

const CryptoPage = () => {

    const [open, setOpen] = useState(false);

    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    const url = window.location.href;
    const symbol = url.substring(url.lastIndexOf('/') + 1).toUpperCase();

    const [cryptoInfo,setCryptoInfo]=useState([])
    const symbolSliced = (symbol).slice(0,-4).toUpperCase()

    const token = localStorage.getItem('token');

//Information regarding cryptocurrency
    const CryptoInfo = () => {
      const apiUrl=`https://krypstock.propulsion-learn.ch/api/cryptoName/${symbolSliced}`
      const method = 'GET';
      const headers = new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      });
      const config = {
          method: method,
          headers: headers,
      };
        fetch(apiUrl,config)
            .then(res => res.json())
            .then(data => {
                 setCryptoInfo(data)
            });
    }

    useEffect(() => {
        CryptoInfo();
    }, []);

    // console.log(cryptoInfo)

    return (
        <>
            <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/>
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <div className="heading">
                <h2>{symbol}</h2>
                </div>
                </NaviWrapper>
            <AllComponentsWrapper>

                <ShrinkingComponentWrapper>
                    <CryptoPageInfoCard symbol={symbol} cryptoInfo={cryptoInfo}/>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                 <FormSelectWrapper>
                <div className="title">
                   <h3>Price Chart</h3>
                </div>
                <div >Time
                    <ChartTimeCrypto setChart2={setChartTimeframe2}/>
                </div>
              </FormSelectWrapper>
                 <GraphWrapper>
                 {chartTimeframe2 === '1d'?
                   <CandlestickCryptoIntraday symbol={symbol} timeLength={chartTimeframe2} cryptoInfo={cryptoInfo}/>
                   :
                   <CandlestickCryptoHistorical symbol={symbol} timeLength={chartTimeframe2} cryptoInfo={cryptoInfo}/>}
                    </GraphWrapper>
                 </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <PortfoliosWithStock symbol={symbol} />
                </ShrinkingComponentWrapper>
                 <ShrinkingComponentWrapper>
                {/*<NewsCrypto symbol={symbol}/>*/}
                {/* <CryptoNewsApiAi symbol={symbol}/>*/}
            </ShrinkingComponentWrapper>
    </AllComponentsWrapper>
        </>
    )
}

export default CryptoPage;