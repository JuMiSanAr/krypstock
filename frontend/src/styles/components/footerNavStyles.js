import styled from "styled-components";

export const FooterWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    padding-bottom: 1.5rem;
    width: 100vw;

    * {
        :hover {
            cursor: pointer;
        }
    }

    @media (min-width: 450px) {
        display: none;
    }
`