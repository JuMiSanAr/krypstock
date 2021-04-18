import styled from "styled-components";

export const IconTitle = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin-top: 20px;
        margin-left: 20px;
        a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    }
`;

export const Delete = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Warning = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    .closeIcon{
        position: relative;
        top: -20px;
    }
    .icon{
        width: 50px;
        height: 40px;
        background-image: linear-gradient( 112.7deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% );
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    .message{
        display: flex;
        align-items: center;
        height:40px;
        background: white;
        color: black;
        padding-right: 20px;
        padding-left: 20px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        button{
            margin-left: 10px;
            height: 30px;
            width: 70px;
            background-image: linear-gradient( 112.7deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% );
            color: white;
            border: none;
            border-radius:10px;
            :active {
                position:relative;
                top:1px;
            }
            :hover{
                background: transparent;
                border: 1px solid blue;
                color: red;
            }
        }
    }
`;

export const PortfolioWrapper = styled.div`
    padding: 5px;
`;