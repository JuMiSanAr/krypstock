import React, {useEffect, useState} from 'react';
import {iexSandboxKey} from "../../store/constants";
import {CryptoPageInfoWrapper} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";


const CryptoPageInfoCard = (props) => {
    const [fetchedData,setData]=useState([])

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const allData = data.map((obj,index) => {
                    const cryptoSymbol=obj.symbol
                    const c=props.symbol
                        if(c===cryptoSymbol){
                            fetchedData.push(obj)
                    } return {
                    }
                })
            });
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