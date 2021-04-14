import styled from "styled-components";
import {darkTheme, lightTheme} from '../Themes';

export const MainContainerSI = styled.div`
  height: 100vh;
  display:flex-start;
  /* background: linear-gradient(45deg, #6e83e6, #c96de6); */
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width:250px;
    height: 55px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    background: linear-gradient(45deg, #6e83e6, #c96de6);
    /* box-shadow: 1px 2px 10px #888888 */
  }
  
  img {
    width:250px;
    height: 250px;
  }
  
  input[type=text], input[type=password]{
    width:250px;
    height: 45px;
    margin-bottom: 1.5rem;
    border: solid 1px lightgray;
    padding-left: 1.25rem;
    border-radius: 10px;
    /* box-shadow: 5px 5px 5px #888888 inset; */
  }

  /* * {
    border: solid 1px red; 
  } */

  #sign-in-form{
    background: white;
    width: 80%;
    border-radius: 40px;
    min-height: 350px;
    color: black;
    box-shadow: 0px 10px 18px #888888;
    @media (min-width: 450px) {
      width: 40%;
    }
  }
`;

export const WrapDivSI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #FFFFFF;
    text-decoration: none;
    }
`;

