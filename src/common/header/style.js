import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    width: 1280px;
    height: 56px;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0; 
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});  
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        a{
            text-decoration: none;
            color: #969696;
        }
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 4px;
        bottom: 4px;
        width: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
        &.focused {
            background-color: #999;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px 0 35px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    font-size: 14px;
    background-color: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.enter {
        width: 160px;
        transition: all .3s ease-out;
    }
    &.enter-active {
        width: 240px;
    }
    &.enter-done {
        width: 240px;
    }
    &.exit {
        width: 240px;
        transition: all .3s ease-out;
    }
    &.exit-active {
        width: 160px;
    }
    &.exit-down {
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 56px;
    width: 210px;
    padding: 10px 20px 0 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        margin-right: 5px;
        font-size: 12px;
        transition: transform .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid rgba(236,97,73,.7);
    font-size: 14px;
    &.reg {
        a{
            text-decoration: none;
            color: #ea6f5a;
        }
    }
    &.writting {
        background-color: #ea6f5a;
        a{
            text-decoration: none;
            color: #fff;
        }
    }
`;