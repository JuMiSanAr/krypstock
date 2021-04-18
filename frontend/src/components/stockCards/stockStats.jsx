import React from "react";
import {StockPageInfoWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";




const StockStats = ({keyStats}) => {

    return (
            <StockPageInfoWrapper>
                <tbody>
                {keyStats ?
                    <>
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
                    </>
                    : <tr><td>Loading</td></tr>
                }
                </tbody>
            </StockPageInfoWrapper>
    )
}

export default StockStats