import React from 'react'
import styled from "styled-components";
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import deletePortfolioFetch from '../../store/fetches/deletePortfolioFetches';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PORTFOLIO } from '../../store/constants';
import { useHistory } from "react-router-dom";



const IconTitle = styled.div`
    display: flex;
    align-items: center;
    h2{
        margin-left: 20px;
        a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;

const Delete = styled.div`
    display: flex;
    justify-content: flex-end;
`;


export const PortfolioCollection = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);

    // console.log("from port collection", portfolioList)
    const handleDelete = (id) => {
        deletePortfolioFetch(id);
        const action = {
            type: DELETE_PORTFOLIO,
            payload: id,
        }
        dispatch(action)
    }

    const toPortfolio = (id) => {
        history.push(`/portfolio/${id}`);
    }

    return (
        <>

            {
                portfolioData.map((portfolio, index) => {
                    return (<ShrinkingComponentWrapper key={index}>

                        <IconTitle>
                            <FolderIcon fontSize="large" />
                            <h2 onClick={() => { toPortfolio(portfolio.id) }}>{portfolio.name}</h2>
                        </IconTitle>
                        <div>
                            <p>
                                {portfolio.description}
                            </p>
                        </div>
                        <Delete>
                            <DeleteIcon onClick={() => handleDelete(portfolio.id)} />
                        </Delete>

                    </ShrinkingComponentWrapper>)
                })
            }
        </>
    )
}
