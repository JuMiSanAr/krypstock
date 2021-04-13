import { ShrinkingComponentWrapper } from "../../styles/globalParts/containerStyles"
import {StockPageInfoWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";
import React, {useEffect, useState} from "react";
import {iexSandboxKey} from "../../store/constants";


const StockStats = ({symbol}) => {

    const [keyStats, setKeyStats] = useState({});

    useEffect(() => {
        if (symbol) {
            fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/stats?token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setKeyStats(data);
                })
        }
    }, [symbol]);
    return (
        <>
        <h3>Key stats</h3>
        <ShrinkingComponentWrapper>
            <StockPageInfoWrapper>
                <tbody>
                    <tr>
                        <td className='key'>Weekly change %:</td>
                        <td>{keyStats.day5ChangePercent.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='key'>Monthly change %:</td>
                        <td>{keyStats.day30ChangePercent.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='key'>YTD change %:</td>
                        <td>{keyStats.ytdChangePercent.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='key'>52-week change %:</td>
                        <td>{keyStats.week52change.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='key'>Dividend yield:</td>
                        <td>{keyStats.dividendYield.toFixed(2)}</td>
                    </tr>
                </tbody>
            </StockPageInfoWrapper>
        </ShrinkingComponentWrapper>
        </>
    )
}

export default StockStats