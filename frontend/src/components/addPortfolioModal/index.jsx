import React, { useRef, useState } from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent } from '../../styles/components/modalStyles';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import createPortfolioFetch from '../../store/fetches/createPortfolioFetches';



export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const saveHandler = () => {
        createPortfolioFetch(title, description)
            .then(data => {
           console.log(data)
        })
        
        setShowModal(false)
       
    }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ContentWrapper>
            <ShrinkingComponentWrapper showModal={showModal}>
              <ModalContent>
               <input type="text" name=""   onChange={event => setTitle(event.target.value)}
                                            value={title} placeholder="Title"/>
               <textarea onChange={event => setDescription(event.target.value)}
                                            value={description} name="" cols="30" rows="10" maxLength="100" 
                                            placeholder="Please enter a detail not more than 100 words.">
                                            </textarea>
                <button onClick={saveHandler}>Save</button>
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