import React from 'react';
import FooterNav from '../footerNav';
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";
import { DetailFont} from "../../styles/components/cryptoStyles";
import {FormSelectWrapper} from "../../styles/components/cryptoStyles/bitCoinStyles";

const Crypto = () => {

    return (
        <>
             <AllComponentsWrapper>

                   <ShrinkingComponentWrapper>
                       <h3>Bitcoin</h3 >
                    <DetailFont>Coin Detail</DetailFont>
                        <FormSelectWrapper>
               <div className="title">
                </div>
                <div >
                    <select className="selector">
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                    <option value="day">Day</option>
                    </select>
                </div>
           </FormSelectWrapper>
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
            <FooterNav />
        </>
    )
}

export default Crypto;