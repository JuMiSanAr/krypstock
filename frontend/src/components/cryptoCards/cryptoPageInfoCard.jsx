import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper, MainContainer, Link} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";
import {allTheme} from "../../styles/Themes";
 
const CryptoPageInfoCard = (props) => {

    // const St = "EOS (EOS) is a cryptocurrency . EOS has a current supply of 1,028,883,390.2296 with 952,716,312.0057 in circulation. The last known price of EOS is 6.59516367 USD and is up 8.27 over the last 24 hours. It is currently trading on 477 active market(s) with $3,627,802,283.44 traded over the last 24 hours. More information can be found at https://eos.io/.";


    useEffect(() => {
        if (props.cryptoInfo.description) {
        }
    }, [props.cryptoInfo.description])

    // console.log(supplyFrom,withFrom,circulationFrom,isFrom,andFrom,marketFrom,tradedFrom)
    // console.log(slice1,slice2,slice3,slice4)
    // console.log(text1,text2,text3,text4,text5)
    // }

    // const slicedDescription = () => {

    const St = props.cryptoInfo.description
    const supplyFrom = St.indexOf("of", 0) + "of".length;
    const withFrom = St.indexOf("with", 0);
    const circulationFrom = St.indexOf("circulation", 0);
    const isFrom = St.indexOf("is", circulationFrom);
    const andFrom = St.indexOf("and", isFrom);
    const marketFrom = St.indexOf("with", andFrom);
    const tradedFrom = St.indexOf("traded", marketFrom);

    const slice1 = St.slice(supplyFrom, withFrom)
    const slice2 = St.slice(withFrom + "with".length, circulationFrom - 3)
    const slice3 = St.slice(isFrom + "is".length, andFrom)
    const slice4 = St.slice(marketFrom + "with".length, tradedFrom)

    const text1 = St.slice(0, supplyFrom)
    const text2 = St.slice(withFrom, withFrom + "with".length)
    const text3 = St.slice(circulationFrom - 3, isFrom + "is".length)
    const text4 = St.slice(andFrom, marketFrom + "with".length)
    const text5 = St.slice(tradedFrom, St.length)
// }

    // const string=text1`<b>${slice1}</b>`,text2,`<b>${slice2}</b>`,text3,`<b>${slice3}</b>`,text4,`<b>${slice4}</b>`,text5)

    // console.log(string)

    // document.getElementById("description").innerHTML = string;


  //   const replace = () => {
  // var str = props.cryptoInfo.description;
  // var patt1 = /\d/g;
  // var result = str.match(patt1);
  // document.getElementById("demo").innerHTML = result;
// }
    return (
        <>
            {props.cryptoInfo ?<>

            <CryptoPageInfoWrapper>
                {/* <MainContainer>
                        {props.cryptoInfo.name}
                </MainContainer> */}
                <MainContainer>
                        {/*{props.cryptoInfo.description}*/}
                    <p id='description'>{text1}<b>{slice1}</b>{text2}<b>{slice2}</b>{text3}<b>{slice3}</b>{text4}<b>{slice4}</b>{text5}</p>
                </MainContainer>
                <MainContainer>
                        <a style={{textDecoration: 'underline', color: allTheme.vibrantturquoise}} href={props.cryptoInfo.url} target='_blank' rel='noreferrer'>Go to Website</a>
                </MainContainer>
            </CryptoPageInfoWrapper></>
            : ''}
        </>
    )
    
}

export default CryptoPageInfoCard;