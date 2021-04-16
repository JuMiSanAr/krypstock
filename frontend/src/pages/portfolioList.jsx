import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import { AllComponentsWrapper} from '../styles/globalParts/containerStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal } from '../components/addPortfolioModal';
import { PortfolioCollection } from '../components/portfolioCollection';
import portfoliosFetch from "../store/fetches/portfoliosFetches";
import {portfoliosAction} from "../store/actions/portfoliosAction";




const AddIcon = styled.div`
    display: flex;
    justify-content: flex-start;
`;


const PortfolioList = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(prev => !prev);
        };

    const dispatch = useDispatch();

    const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);
    const portfoliosFetched = useSelector(state => state.portfoliosReducer.portfoliosFetched);

    useEffect(() => {
      portfoliosFetch()
        .then(data =>{
              console.log(data)
            const action = portfoliosAction(data);
            dispatch(action); 
        })
    }, []);

    return (
             <AllComponentsWrapper>
             <AddIcon>
             <AddCircleIcon  onClick={openModal}/>
           
             </AddIcon>
             <Modal showModal={showModal} setShowModal={setShowModal}/>
             {
                portfolioData && portfoliosFetched ?  <PortfolioCollection/> : ""
             }
             {
                 !portfolioData && !portfoliosFetched ? '...LOADING' : ''
             }
             {
                !portfolioData && portfoliosFetched ?  'Add a new portfolio, man!' : ""
             }
               
         </AllComponentsWrapper>
    )
}

export default PortfolioList;