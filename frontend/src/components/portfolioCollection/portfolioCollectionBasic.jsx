import React from 'react'
import styled from "styled-components";
import FolderIcon from '@material-ui/icons/Folder';
import {ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {useHistory} from "react-router-dom";

const IconTitle = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin-left: 20px;
        margin-top: 15px;
        a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    }
`;

export const PortfolioCollectionBasic = ({portfolios}) => {

    const history = useHistory();

    const toPortfolio = (id) => {
        history.push(`/portfolio/${id}`);
    }

    return (
        <>
             {
                 portfolios.map((portfolio, index) => {
                    return (<ShrinkingComponentWrapper key={index}>
                        <IconTitle>
                            <FolderIcon fontSize="large" />
                            <h3 onClick={() => toPortfolio(portfolio.id)}>{portfolio.name}</h3>
                        </IconTitle>
                    </ShrinkingComponentWrapper>)
                })
            }
        </>
    )
}
