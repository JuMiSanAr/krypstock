import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  input{
      margin-bottom: 10px;
      border-radius: 5px;
      height: 40px;
      width: 260px;
      :focus{
          outline: none;
      }
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 5px;
    :focus{
          outline: none;
      }
  }
  button {
    background-color: #6418C3;
    text-transform: uppercase;
    font-weight: 600;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    border: none;
    color: white;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
`;