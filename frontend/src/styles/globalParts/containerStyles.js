import styled from "styled-components";


export const AllComponentsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: solid 1px purple; */
`

export const FullWidthComponentWrapper = styled.div`
    width: 90%;
    height: 350px;
/* dont forget to change the height */
    /* border: solid 1px #3B3363;  */
    border-radius: 15px;
    margin: 1rem; 
    background: gray;
    padding: 1.5rem;

    img {
        width: 80%;     
    }
`


export const ShrinkingComponentWrapper = styled(FullWidthComponentWrapper)`
    @media (min-width: 450px) {
        width: 40%;
    }
`