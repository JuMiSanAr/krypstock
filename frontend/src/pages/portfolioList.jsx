import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AllComponentsWrapper } from '../styles/globalParts/containerStyles';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal } from '../components/addPortfolioModal';
import { PortfolioCollection } from '../components/portfolioCollection';
import portfoliosFetch from "../store/fetches/portfoliosFetches";
import { portfoliosAction } from "../store/actions/portfoliosAction";
import {NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';

const AddIcon = styled.div`
display: flex;
justify-content: flex-end;
i{
  position: fixed;
  top: 83vh;
  font-size: 25px;
  margin: 15px;
  z-index: 10;
  color: orange;
  text-shadow: 1px 1px 2px #413f3f, 0 0 25px blue, 0 0 5px darkblue;

}
`;

const PortfolioList = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const dispatch = useDispatch();

  const portfolioData = useSelector(state => state.portfoliosReducer.portfolios);
  const portfoliosFetched = useSelector(state => state.portfoliosReducer.portfoliosFetched);

  useEffect(() => {
    portfoliosFetch()
      .then(data => {
        const action = portfoliosAction(data);
        dispatch(action);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>

              <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading portfolio">
                <h2>My portfolios</h2>
                </div>
                </NaviWrapper>
    <AllComponentsWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {
        portfolioData && portfoliosFetched ? <PortfolioCollection/> : ""
      }
      {
        !portfolioData && !portfoliosFetched ? '...LOADING' : ''
      }
      {
        !portfolioData && portfoliosFetched ? 'Add a new portfolio, man!' : ""
      }
    </AllComponentsWrapper>
     <AddIcon> 
        {/* <AddCircleIcon onClick={openModal} /> */}
        <i onClick={openModal} className="fas fa-folder-plus"> </i>
     </AddIcon> 
      
  </>
  )
}

export default PortfolioList;