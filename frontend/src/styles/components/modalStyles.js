import styled from 'styled-components';
import {
  MdClose
} from 'react-icons/md';
import {
  darkTheme,
  lightTheme
} from "../../styles/Themes";

export const Background = styled.div `
  /* width: 100vw; */
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* margin-top: -124px; */
  margin-top: -80px;
`;

export const ModalContent = styled.div `
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
  .stock-company-name{
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
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

export const ContentWrapper = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
`;

export const SubmitButton = styled.div`
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


// Crypto Quick transaction table

export const CryptStockFormSelectWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
    }
    select{
    /* margin: 5px; */
    /* width: 100px; */
    height: 30px;
    color: #000;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
    }
`;

export const CrypStockTransacWrapper = styled.div `
  .extra-margin{
    /* margin: 10px 0 10px 0; */
    margin-top: 15px;
  }
  .margin-quantity{
    margin-top: 25px;
  }
  .amountInput{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
    select{
    /* margin: 5px; */
    /* width: 100px; */
    height: 30px;
    color: #000;
    border: none;
    border-radius: 5px;
    outline: none;
    }
  }
  .input{
    width: 90px;
    height: 30px;
    margin-left: 80px;
    border: none;
    -moz-box-shadow:    inset 0 0 3px #000000;
   -webkit-box-shadow: inset 0 0 3px #000000;
   box-shadow:         inset 0 0 3px #000000;
   text-align: center;
  }
`;

// Crypto Overview Modal



export const BackgroundOverview = styled.div `
  /* width: 100vw; */
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  background-size: cover;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* margin-top: -165px; */
  margin-top: -120px;
   
`;