import React from 'react'
import styled from "styled-components";
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import {ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import deletePortfolioFetch from '../../store/fetches/deletePortfolioFetches';
import {useDispatch, useSelector} from "react-redux";
import { DELETE_PORTFOLIO } from '../../store/constants';



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


export const PortfolioCollectionBasic = () => {

    const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);

    return (
        <>

             {
                 portfolioData.map((portfolio, index) => {
                    return (<ShrinkingComponentWrapper key={index}>

                        <IconTitle>
                            <FolderIcon fontSize="large"/>
                            <h2><a href={`https://krypstock.propulsion-learn.ch/portfolio/${portfolio.id}`}>{portfolio.name}</a></h2>
                        </IconTitle>
                    </ShrinkingComponentWrapper>)
                 })
             }

                {/* <ShrinkingComponentWrapper>

                    <IconTitle>
                        <FolderIcon fontSize="large"/>
                        <h2>My Cryto Collection</h2>
                    </IconTitle>
                    <div>
                        <p>
                            A while back I needed to count the amount of letters that a piece of text in an email template had a
                        </p>
                    </div>
                    <Delete>
                        <DeleteIcon />
                    </Delete>

                </ShrinkingComponentWrapper>    */}
        </>
    )
}
