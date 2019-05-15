import styled from 'styled-components';


export const FooterWrapper = styled.div`
    width: 960px;
    margin: 30px auto;
    .item-wrapper{
        display: flex;
        padding: 30px 0;
    }
    ul{
        text-align: center;
    }
`;
export const FooterItem = styled.li`
    .jump-to{
        display: inline-block;
        vertical-align: middle;
        color: #969696;
        text-decoration: none;
        font-size: 14px;
        :hover{
            color: #333;
        }
    }
    .point{
        display: inline-block;
        margin: 0 5px;
        vertical-align: top;
        font-size: 14px;
        color: #969696;
    }
`;