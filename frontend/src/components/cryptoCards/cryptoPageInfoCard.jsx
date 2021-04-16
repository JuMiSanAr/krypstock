import React, {useEffect, useState} from 'react';
import {iexSandboxKey} from "../../store/constants";
import {CryptoPageInfoWrapper} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";


const CryptoPageInfoCard = (props) => {
    const [fetchedData,setData]=useState([])
    const [cryptoInfo, setCryptoInfo] = useState({});

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const allData = data.map((obj,index) => {

                    if(props.symbol===obj.symbol){
                        setCryptoInfo(obj)
                    console.log(cryptoInfo)
                    }
                    return {
                    }
                })
                setData(allData);
                if(props.symbol){
                 setCryptoInfo(data)
            console.log(cryptoInfo)
             }
            });
    }, []);

    // useEffect(() => {

    // }, [stockInfo]);
    return (
        <CryptoPageInfoWrapper>
            <tbody>
                {/*<tr>*/}
                {/*    <td className='key'>Symbol:</td>*/}
                {/*    <td>{cryptoInfo.symbol}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td className='key'>Country:</td>*/}
                {/*    <td>{cryptoInfo.country}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td className='key'>Exchange:</td>*/}
                {/*    <td>{cryptoInfo.exchange}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td className='key'>Industry:</td>*/}
                {/*    <td>{cryptoInfo.industry}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td className='key'>Website:</td>*/}
                {/*    <td><a href={cryptoInfo.website} target='_blank' rel='noreferrer'>Click here</a></td>*/}
                {/*</tr>*/}
            </tbody>
        </CryptoPageInfoWrapper>
    )
}

export default CryptoPageInfoCard