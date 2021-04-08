import React, {useEffect} from 'react';
import {iexSandboxKey} from "../../store/constants";

const CryptoPageInfoCard = (props) => {

    useEffect(() => {
        fetchCryptoInfo();
    }, []);

    const fetchCryptoInfo = () => {
    }

    return (
        <h1>Crypto World</h1>
    )
}

export default CryptoPageInfoCard