import styled from "styled-components";

export const FlexDiv = styled.div`
    display: flex;
`

export const NewsWrapper = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
     
    a {
        text-decoration: none;
        :hover {
            cursor: pointer;
        }
    }

    .source {
        font-size: 0.8rem;
        margin-bottom: 1em;
    }    
`