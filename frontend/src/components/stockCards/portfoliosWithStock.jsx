import React, {useEffect, useState} from "react";
import portfoliosFetch from "../../store/fetches/portfoliosFetches";
import {portfoliosAction} from "../../store/actions/portfoliosAction";
import {useDispatch, useSelector} from "react-redux";
import {PortfolioCollectionBasic} from "../portfolioCollection/portfolioCollectionBasic";


const PortfoliosWithStock = (props) => {

    const dispatch = useDispatch();

    const [portfolios, setPortfolios] = useState([]);
    const [addToPorfolio, setAddToPorfolio] = useState(false);

    const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);
    const portfoliosFetched = useSelector(state => state.portfoliosReducer.portfoliosFetched);

    useEffect(() => {
        // if (!portfoliosFetched) {
            portfoliosFetch()
                .then(data => {

                    const action = portfoliosAction(data);
                    dispatch(action);

                    const thisPortfolios = data.filter(portfolio => {
                        let result = false;

                        portfolio.calculations.forEach(calculation => { 
                            if (calculation.symbol === props.symbol) {
                                result = true;
                            } 
                        })

                        return result;
                    });

                    setPortfolios(thisPortfolios);
            });
        // }
        // else {
        //     if (portfolios.length > 0) {
        //         const thisPortfolios = portfolioData.results.filter(portfolio => {
        //         let result = false;
        //
        //         portfolio.calculations.forEach(calculation => {
        //             if (calculation.symbol === props.symbol) {
        //                 result = true;
        //             }
        //         })
        //
        //         return result;
        //         });
        //
        //         setPortfolios(thisPortfolios);
        //         }
        // }
    }, []);

    return (
        <>
            {portfolios.length > 0 ?
                <>
                    <h3>My portfolios with this stock</h3>
                    <PortfolioCollectionBasic/>
                </>
                : ''
            }
        </>
    )
}

export default PortfoliosWithStock