import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import {SearchPageInput} from "../styles/globalParts/inputStyles";
import {
    AllComponentsWrapper,
    ShrinkingComponentWrapper,
    ShrinkingComponentWrapperNoBackground
} from "../styles/globalParts/containerStyles";

const Search = () => {

    const [allStocks, setAllStocks] = useState([]);
    const [allCryptos, setAllCryptos] = useState([]);

    const [search, setSearch] = useState([])

    useEffect(() => {

    }, []);

    return (
        <>
            <AllComponentsWrapper>
                <ShrinkingComponentWrapperNoBackground>
                </ShrinkingComponentWrapperNoBackground>
                <SearchPageInput onChange={event => setSearch(event.target.value)}/>
                <FooterNav/>
            </AllComponentsWrapper>
        </>
    )
}

export default Search;