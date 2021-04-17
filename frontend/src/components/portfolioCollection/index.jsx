import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import deletePortfolioFetch from '../../store/fetches/deletePortfolioFetches';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PORTFOLIO } from '../../store/constants';
import { useHistory } from "react-router-dom";
import {IconTitle, Delete, Warning} from '../../styles/components/portfolioCollectionStyle'




export const PortfolioCollection = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [warning, setWarning] = useState(false);

    const [id, setId] = useState();

    const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);

    // console.log("from port collection", portfolioList)
    const handleDelete = (id) => {
        deletePortfolioFetch(id);
        const action = {
            type: DELETE_PORTFOLIO,
            payload: id,
        }
        dispatch(action)
        setWarning(false)
    }

    const toPortfolio = (id) => {
        history.push(`/portfolio/${id}`);
    }

    const handleWarning = (id)=> {
    setId(id)
    setWarning(true)
    
}   

    return (
        <>

            {
                portfolioData.map((portfolio, index) => {
                    return ( 
                     <ShrinkingComponentWrapper key={index}> 
                        <IconTitle className="portfolioDescripTitle">
                            <FolderIcon fontSize="large" />
                            <h3 onClick={() => { toPortfolio(portfolio.id) }}>{portfolio.name}</h3>
                        </IconTitle>
                        <div className="portfolioDescripTitle">
                            <p>
                                {portfolio.description}
                            </p>
                        </div>
                       {
                        id === portfolio.id && warning ?  
                        <Warning>
                            <span className="icon">
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </span>
                            <div className="message">
                                <p> Are you sure you want to delete ?</p>
                                <button onClick={() => handleDelete(portfolio.id)}>Delete</button>
                            </div>
                            <div onClick={() => setWarning(false)} className="closeIcon">
                            <i className="fa fa-window-close" aria-hidden="true"></i>
                            </div>  
                        </Warning>
                        : ""

                       } 
                       
                        <Delete>
                            <DeleteIcon onClick={() => handleWarning (portfolio.id)} />
                        </Delete>
                     </ShrinkingComponentWrapper> 
                    )
                })
            }
        </>
    )
}
