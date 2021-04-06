import styled from "styled-components";

export const MainWrapper = styled.div`
     .content {
            display: none;
        }
    .active-content {
        display:flex;
        flex-direction:column;
    }
`;
export const MenuWrapper = styled.div `
    width: 70vw;
    height: 80vh;
    border: 1px solid #f2f2eb;
    border-width:1px 1px 1px 0;
    padding: 0 20px 0  20px ;
`;

export const MenuItemWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    margin: 30px 0 30px 0;
    
    .move-right-1{
       margin: 0 100px 0 20px;
   }
   .move-right-2{
       margin: 0 120px 0 20px;
   }
   .move-right-3{
       margin: 0 130px 0 20px;
   }
`;

export const LogoIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 100px;
    }
`;

export const MenuContentWrapper = styled.div `
    img{
        height: 100px;
        width: 100px;
    }
`;