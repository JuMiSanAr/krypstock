import styled from "styled-components";
import {lightTheme, darkTheme} from "../../Themes";

export const FlexDiv = styled.div`
    display: flex;
`

export const NewsWrapper = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
     
    a {
        text-decoration: none;
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        :hover {
            cursor: pointer;
        }
    }

    .source {
        font-size: 0.8rem;
        margin-bottom: 1em;
    }    
    
    .news_date {
        font-size: 10px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    
    h3 {
        margin-bottom: 0px;
    }
`

export const HeadlineWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    img{
    height: 40px;
    width: 40px;
    margin-right: 10px;
    }
`;

export const DateAuthorWrapper = styled.div`
    margin-bottom: 8px;
    span{
    font-size: 10px;
    margin-right: 10px;
    }
`;

