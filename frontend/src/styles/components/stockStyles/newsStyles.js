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

export const HeadlineWrapper = styled.article`
    /* display: flex;
    margin-bottom: 10px;
    padding: 5px;
    /* img{
    height: 40px;
    width: 40px;
    margin-right: 10px;
    } */
    /* img{
    height: 100px;
    width: 100px;
    margin-right: 10px;
    }  */
    width: 300px;
    margin: 10px;
    span{
     
        padding: 10px;
    }
    img{
        width: 300px;
        height: 250px;
        cursor: pointer;
    }
    .publishDetial{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    h3{
        cursor: pointer;
    }
    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        /* img{
        height: 40px;
        width: 40px;
        margin-right: 10px;
        } */
        img{
        height: 100px;
        width: 100px;
        margin-right: 10px;
    }
    .publishDetial{
        display: flex;
        flex-direction: column;
    }
    .summary{
        display: none;
    }
    }

`;

export const DateAuthorWrapper = styled.div`
    margin-bottom: 8px;
    span{
    font-size: 10px;
    margin-right: 10px;
    }
`;

export const ShowMore = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeroHeader = styled.header`
  height: 400px;
  width: 100vw;
  margin-top: -200px;
  background-image: url("https://source.unsplash.com/WYd_PkCa1BY");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;


`;

export const NewsContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        word-break: break-all;
        margin: 0;
        width: 100vw;
    }
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: auto;
    border-left: 2px solid white;
    border-bottom: 10px solid white;
    h1{
        margin-left: 30px;
    }
    .toggleTitle{
        margin-left: 100px;
        display: flex;
        align-items: center;
        span{
            margin: 0 20px 0 20px;
        }
        h3{
            cursor: pointer;
            :hover{
                color: yellow;
            }
        }
    }
    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        width: 100vw;
    }
`;


// crypto News Styles home page

export const CryptoNewsWrapper = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;  
    
    .news_date {
        font-size: 10px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    
    h3 {
        margin-bottom: 0px;
    }
`

export const CryptoHeadlineWrapper = styled.article`
    
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        img{
        height: 100px;
        width: 100px;
        margin-right: 10px;
    }
    .publishDetial{
        display: flex;
        flex-direction: column;
    }
    .summary{
        display: none;
    }
    span{
     
        padding: 10px;
    }
    h3{
        cursor: pointer;
        margin-bottom: 10px;
    }

`;

