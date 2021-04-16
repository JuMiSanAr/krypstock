
import styled from "styled-components";

export const MainContainerC = styled.div`
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
    /* width:300px;
    min-height:250px; */
    z-index: 999;
  }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`;