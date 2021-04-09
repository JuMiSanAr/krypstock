import React, {useEffect, useState} from "react";
import portfoliosFetch from "../../store/fetches/portfoliosFetches";
import {portfoliosAction} from "../../store/actions/portfoliosAction";
import {useDispatch} from "react-redux";
import {ShrinkingComponentWrapper} from "../../styles/globalParts/containerStyles";


const PortfoliosWithStock = (props) => {

    const dispatch = useDispatch();

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        portfoliosFetch()
            .then(data => {

                const action = portfoliosAction(data.results);
                dispatch(action);

                const thisPortfolios = data.results.filter(portfolio => {
                    let result = false;

                    portfolio.calculations.forEach(calculation => {
                        if (calculation.symbol === props.symbol) {
                            result = true;
                        }
                    })

                    return result;
                });

                setPortfolios(thisPortfolios);

            })
    }, []);

    return (
        <>
            <h3>My portfolios with this stock</h3>
            <ShrinkingComponentWrapper>
                {portfolios.length > 0 ? portfolios.map((portfolio, index) => {
                    return (
                        <h1 key={index}>{portfolio.name}</h1>
                    )
                })
                    : <h1>HEY</h1>}
            </ShrinkingComponentWrapper>
        </>
    )
}

export default PortfoliosWithStock