import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper, MainContainer, Link} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";

 
const CryptoPageInfoCard = (props) => {

    const [fetchedData,setData]=useState([])
    const symbol = (props.symbol).slice(0,-4).toUpperCase()
    console.log(symbol)

    const token = localStorage.getItem('token');

    const InfoCard = () => {
      const apiUrl=`https://krypstock.propulsion-learn.ch/api/cryptoName/${symbol}`
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
                 setData(data)
            });
    }

    useEffect(() => {
        InfoCard();
    }, []);

    return (
        <CryptoPageInfoWrapper>
            {/* <div>
                    {fetchedData.name}
            </div> */}
            <MainContainer>
                    {fetchedData.description}
            </MainContainer>
            <MainContainer>
                    <Link href={fetchedData.url} target='_blank' rel='noreferrer'>Go to Website</Link>
            </MainContainer>
        </CryptoPageInfoWrapper>
    )
}

export default CryptoPageInfoCard;