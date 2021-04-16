import styled from "styled-components";
import {darkTheme, lightTheme} from '../Themes';


export const HeaderWrapper = styled.div`

 @media only screen and (max-width: 600px) and (min-width: 320px) {
      z-index: -1;
      background:  linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0.3051202623906706) 0%, rgba(255,255,255,1) 65%),  url(https://res.cloudinary.com/tennam/image/upload/v1618061102/Propulsion/download_1.jpg);
       width: 100%;
       height: 800px;
       margin-top:-200px;
       clip-path: circle(63.4% at 49% 26%);
  }
  
`;

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) and (min-width: 320px) {
    margin-top: -650px;
    justify-content: center;
    img{
    z-index: 999;
  }
  }
  
`;

export const MainContainerSI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 5px 15px #888888;
  border-radius: 40px;
  width:350px;
  min-height: 350px;
  .link{
    text-decoration: none;
  }
  .linkbutton{
    color: white;
  }
  
  h4{
   color: #6d82e5;
 }

  @media only screen and (max-width: 600px) and (min-width: 320px) {
    z-index: 999;
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  input{
    width:250px;
    height: 40px;
    margin-bottom: 1rem;
    border: solid 1px lightgray;
    padding-left: 1.25rem;
    border-radius: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
     button {
     width:275px;
     height: 35px;
     margin-top: 10px;
     background-color: white;
     border-radius: 10px;
     border: none;
     color: white;
     font-weight: bold;
     font-size: 1.25rem;
     background: linear-gradient(45deg, #6e83e6, #c96de6);
   }
`;