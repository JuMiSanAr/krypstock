import styled from "styled-components";

export const VerificationWrapper = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) and (min-width: 320px) {
    margin-top: -600px;
    justify-content: center;
    img{
    z-index: 999;
  }
  }
  
`;

export const MainContainerV = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 5px 15px #888888;
  border-radius: 20px;
  width:300px;
  min-height: 550px;
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

export const InputWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  input{
    width:250px;
    height: 50px;
    margin-bottom: 1rem;
    border: solid 1px lightgray;
    padding-left: 1.25rem;
    border-radius: 10px;
  }

`;