import React, {useEffect, useState} from "react";
import portfoliosFetch from "../../store/fetches/portfoliosFetches";
import {portfoliosAction} from "../../store/actions/portfoliosAction";
import {useDispatch} from "react-redux";
import {PortfolioCollectionBasic} from "../portfolioCollection/portfolioCollectionBasic";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; 
    .create-portfolio{
        margin: 20px 0 40px 0;
        text-decoration: none;
        color: white;
        cursor: pointer;
       .fa{
           font-size: 30px;
           :hover{
            font-size: 40px;
        }
       }  
    }

`;

const PortfoliosWithStock = (props) => {

    const dispatch = useDispatch();

    const [portfolios, setPortfolios] = useState([]);


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
                    <PortfolioCollectionBasic portfolios={portfolios}/>
                </>
                :
                 <> 
                    <h3>My portfolios with this stock</h3>
                    <MessageWrapper>
                    <p>You don't have any portfolios with this stock</p>
                    <strong>Go to the list of your portfolios</strong>
                    <Link className='create-portfolio' to="/portfolio-list/">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </Link>
                   
                    </MessageWrapper>
           
            
                </>
            }
        </>
    )
}

export default PortfoliosWithStock