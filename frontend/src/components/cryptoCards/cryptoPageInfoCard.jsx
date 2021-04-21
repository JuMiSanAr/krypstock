import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper, MainContainer, Link} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";
import {allTheme} from "../../styles/Themes";
 
const CryptoPageInfoCard = (props) => {
    //
    // const [St,setSt] = useState('');
    // const [supplyFrom,setSupplyFrom] = useState('');
    // const [withFrom,setWithFrom] = useState('');
    // const [circulationFrom,setCirculationFrom] = useState('');
    // const [isFrom,setIsFrom] = useState('');
    // const [andFrom,setAndFrom] = useState('');
    // const [marketFrom,setMarketFrom] = useState('');
    // const [tradedFrom,setTradedFrom] = useState('');
    //
    // const [slice1,setSlice1] = useState('');
    // const [slice2,setSlice2] = useState('');
    // const [slice3,setSlice3] = useState('');
    // const [slice4,setSlice4] = useState('');
    //
    // const [text1,setText1] = useState('');
    // const [text2,setText2] = useState('');
    // const [text3,setText3] = useState('');
    // const [text4,setText4] = useState('');
    // const [text5,setText5] = useState('');
    //
    //  // const St = "EOS (EOS) is a cryptocurrency . EOS has a current supply of 1,028,883,390.2296 with 952,716,312.0057 in circulation. The last known price of EOS is 6.59516367 USD and is up 8.27 over the last 24 hours. It is currently trading on 477 active market(s) with $3,627,802,283.44 traded over the last 24 hours. More information can be found at https://eos.io/.";
    //
    // const [condition,setCondition]=useState(false)
    //
    // useEffect(() => {

    //     if(props.cryptoInfo.description&&St==='') {
    //         setSt(props.cryptoInfo.description);
    //         console.log(St);
    //     }else if(St!==''&&(!supplyFrom&&!withFrom&&!circulationFrom&&!isFrom&&!andFrom&&!marketFrom&&!tradedFrom)){
    //         console.log(St);
    //         setSupplyFrom(St.indexOf("of", 0) + "of".length);
    //         console.log(St.indexOf("with", 0))
    //         setWithFrom(St.indexOf("with", 0));
    //         setCirculationFrom(St.indexOf("circulation", 0));
    //         setIsFrom(St.indexOf("is", circulationFrom));
    //         setAndFrom(St.indexOf("and", isFrom));
    //         setMarketFrom(St.indexOf("with", andFrom));
    //         setTradedFrom(St.indexOf("traded", marketFrom));
    //
    //
    //         // console.log(slice1,slice2,slice3,slice4)
    //         // console.log(text1,text2,text3,text4,text5)
    //     }else{
    //         // console.log(supplyFrom)
    //         console.log(St,supplyFrom,withFrom,circulationFrom,isFrom,andFrom,marketFrom,tradedFrom)
    //         setSlice1(St.slice(supplyFrom, withFrom));
    //         setSlice2(St.slice(withFrom + "with".length, circulationFrom - 3));
    //         setSlice3(St.slice(isFrom + "is".length, andFrom));
    //         setSlice4(St.slice(marketFrom + "with".length, tradedFrom));
    //
    //         setText1(St.slice(0, supplyFrom));
    //         setText2(St.slice(withFrom, withFrom + "with".length));
    //         setText3(St.slice(circulationFrom - 3, isFrom + "is".length));
    //         setText4(St.slice(andFrom, marketFrom + "with".length));
    //         setText5(St.slice(tradedFrom, St.length));
    //         setCondition(true);
    //         }
    //
    // }, [props.cryptoInfo.description,St,tradedFrom])

    // }


    // const slicedDescription = () => {

    // const St = props.cryptoInfo.description
    // const supplyFrom = St.indexOf("of", 0) + "of".length;
    // const withFrom = St.indexOf("with", 0);
    // const circulationFrom = St.indexOf("circulation", 0);
    // const isFrom = St.indexOf("is", circulationFrom);
    // const andFrom = St.indexOf("and", isFrom);
    // const marketFrom = St.indexOf("with", andFrom);
    // const tradedFrom = St.indexOf("traded", marketFrom);
    //
    // const slice1 = St.slice(supplyFrom, withFrom)
    // const slice2 = St.slice(withFrom + "with".length, circulationFrom - 3)
    // const slice3 = St.slice(isFrom + "is".length, andFrom)
    // const slice4 = St.slice(marketFrom + "with".length, tradedFrom)
    //
    // const text1 = St.slice(0, supplyFrom)
    // const text2 = St.slice(withFrom, withFrom + "with".length)
    // const text3 = St.slice(circulationFrom - 3, isFrom + "is".length)
    // const text4 = St.slice(andFrom, marketFrom + "with".length)
    // const text5 = St.slice(tradedFrom, St.length)
// }

    return (
        <>
            {props.cryptoInfo ?<>

            <CryptoPageInfoWrapper>
                {/* <MainContainer>
                        {props.cryptoInfo.name}
                </MainContainer> */}
                <MainContainer>
                        {props.cryptoInfo.description}
                    {/*{condition?<p id='description'>{text1}<b>{slice1}</b>{text2}<b>{slice2}</b>{text3}<b>{slice3}</b>{text4}<b>{slice4}</b>{text5}</p>:""}*/}
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