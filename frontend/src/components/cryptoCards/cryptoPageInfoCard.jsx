import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper, MainContainer, Link} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";
import {allTheme} from "../../styles/Themes";
 
const CryptoPageInfoCard = (props) => {

    return (
        <>
            {props.cryptoInfo ? 
            <CryptoPageInfoWrapper>
                {/* <MainContainer>
                        {props.cryptoInfo.name}
                </MainContainer> */}
                <MainContainer>
                        {props.cryptoInfo.description}
                </MainContainer>
                <MainContainer>
                        <a style={{textDecoration: 'underline', color: allTheme.vibrantturquoise}} href={props.cryptoInfo.url} target='_blank' rel='noreferrer'>Go to Website</a>
                </MainContainer>
            </CryptoPageInfoWrapper>
            : ''}
        </>
    )
    
}

export default CryptoPageInfoCard;