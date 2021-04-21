import React, {useEffect, useState} from 'react';
import {CryptoPageInfoWrapper} from "../../styles/components/cryptoStyles/cryptoPageInfoStyles";


const CryptoPageInfoCard = (props) => {
    // console.log(props.cryptoInfo)

    // const replacer = (match, p1, p2, p3, offset, string)=>{
    //     return [p1, p2, p3].join(' - ');
    // }
    // let newString = 'has a current supply of 1,028,883,390.2296 '.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    //  console.log(newString);

     const St = "EOS has a current supply of 1,028,883,390.2296 with ";

const pFrom = St.indexOf("has a current supply of") + "supply of".length;
const  pTo = St.lastIndexOf(" - ");

const result = St.substring(pFrom, pTo - pFrom);
console.log(pFrom,pTo)

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
    return (<>
        <CryptoPageInfoWrapper>
            {/*<div>*/}
            {/*        {props.cryptoInfo.name}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*        {props.cryptoInfo.description}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*        <a href={props.cryptoInfo.url} target='_blank' rel='noreferrer'>Website</a>*/}
            {/*</div>*/}
        </CryptoPageInfoWrapper></>
    )
}

export default CryptoPageInfoCard