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
        background: yellow;
        border: 1px solid orange;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
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
            background: blue;
            color: white;
            border: none;
            border-radius:28px;
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