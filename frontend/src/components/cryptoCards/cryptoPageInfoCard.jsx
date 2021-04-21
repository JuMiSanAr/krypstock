import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";


const CryptoPageInfoCard = (props) => {
    console.log(props.cryptoInfo)
    return (
        <CryptoPageInfoWrapper>
            <div>
                    {props.cryptoInfo.name}
            </div>
            <div>
                    {props.cryptoInfo.description}
            </div>
            <div>
                    <a href={props.cryptoInfo.url} target='_blank' rel='noreferrer'>Website</a>
            </div>
        </CryptoPageInfoWrapper>
    )
}

export default CryptoPageInfoCard