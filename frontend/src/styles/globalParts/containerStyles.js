import styled from "styled-components";


export const AllComponentsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: solid 1px purple;
`

export const ShrinkingComponentWrapper = styled.div`
    width: 90%;
    height: 350px;
    /* dont forget to change the height */
    border: solid 1px #3B3363;
    margin: 1rem; 

    img {
        width: 80%;     
    }

    @media (min-width: 450px) {
        width: 40%;
    }
`