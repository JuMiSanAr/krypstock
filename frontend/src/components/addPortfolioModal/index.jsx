import React, { useRef, useState } from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent, SubmitButton  } from '../../styles/components/modalStyles';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import createPortfolioFetch from '../../store/fetches/createPortfolioFetches';
import { useDispatch, useSelector } from "react-redux";
import { portfoliosAction } from "../../store/actions/portfoliosAction";



export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const dispatch = useDispatch();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const allCurrentPortfolios = useSelector(state => state.portfoliosReducer.portfolios)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveHandler = () => {
    createPortfolioFetch(title, description)
      .then(data => {
        const newPortfolios = [data, ...allCurrentPortfolios];
        const action = portfoliosAction(newPortfolios);
        dispatch(action);
        setShowModal(false)
      })
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ContentWrapper>
            <ShrinkingComponentWrapper showModal={showModal}>
              <ModalContent>
                <input type="text" name="" onChange={event => setTitle(event.target.value)}
                  value={title} placeholder="Title" />
                <textarea onChange={event => setDescription(event.target.value)}
                  value={description} name="" cols="30" rows="10" maxLength="100"
                  placeholder="Please enter a detail not more than 100 words.">
                </textarea>
                <SubmitButton>
                <button onClick={saveHandler}>Save</button>
                </SubmitButton> 
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ShrinkingComponentWrapper>
          </ContentWrapper>
        </Background>
      ) : null}
    </>
  );
};