import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'


const TopPerformingCrypto = () => {

    let allCryptos = useSelector(state => state.cryptoReducer.allCryptos)
    // let allCryptosArray = [...allCryptos];
    const [topCryptos, setTopCryptos] = useState([]);
    
    useEffect( () => {
        const top10Cryptos = [];
        
        console.log('topCryptos', topCryptos)

        if (allCryptos.length > 0) {
            allCryptos.sort( (a,b) => b.priceChangePercent - a.priceChangePercent ) // sort in descending order
            for (let i = 0; i < 10; i++) {
                top10Cryptos.push(allCryptos[i]);
            }
        }
        
        setTopCryptos(top10Cryptos)
        console.log(topCryptos)
    }, [allCryptos] )

    return (
        <ShrinkingComponentWrapper> 
            <h3>Top 10 Performing Currencies</h3>
            <Table id="crypto">
                {
                    topCryptos !== [] && topCryptos.length === 10 ?
                    <thead>
                        <tr>
                        <th>Currency</th>
                        <th>Price</th>
                        <th>Change %</th>
                        </tr>
                    </thead>
                    :
                    null
                }
                <tbody>
                    {topCryptos !== [] && topCryptos.length === 10 ? 
                        topCryptos.map( (crypto, index) => 
                        <tr key={index}>
                            <td>{crypto.symbol}</td>
                            <td>{crypto.lastPrice}</td>
                            <td>{crypto.priceChangePercent}</td>
                        </tr>)
                        :
                        <tr>
                            <td colSpan='3'>No information available</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </ShrinkingComponentWrapper>
    )
}

export default TopPerformingCrypto;