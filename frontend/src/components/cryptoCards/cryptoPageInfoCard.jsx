import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper, MainContainer, Link} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";
import {allTheme} from "../../styles/Themes";
 
const CryptoPageInfoCard = (props) => {
    // console.log(props.cryptoInfo)

    // const replacer = (match, p1, p2, p3, offset, string)=>{
    //     return [p1, p2, p3].join(' - ');
    // }
    // let newString = 'has a current supply of 1,028,883,390.2296 '.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    //  console.log(newString);

     const St = "EOS (EOS) is a cryptocurrency . EOS has a current supply of 1,028,883,390.2296 with 952,716,312.0057 in circulation. The last known price of EOS is 6.59516367 USD and is up 8.27 over the last 24 hours. It is currently trading on 477 active market(s) with $3,627,802,283.44 traded over the last 24 hours. More information can be found at https://eos.io/.";

const supplyFrom = St.indexOf("supply of", 0);
const withFrom = St.indexOf("with", 0);
const circulationFrom = St.indexOf("in circulation", 0);
const isFrom = St.indexOf("is", circulationFrom);
// const  pTo = St.lastIndexOf("EOS has a current supply ");

// const result = St.substring(pFrom, pTo - pFrom);
console.log(supplyFrom,withFrom,circulationFrom,isFrom)

//     function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);  // abc - 12345 - #$*%


  //   const replace = () => {
  // var str = props.cryptoInfo.description;
  // var patt1 = /\d/g;
  // var result = str.match(patt1);
  // document.getElementById("demo").innerHTML = result;
// }
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