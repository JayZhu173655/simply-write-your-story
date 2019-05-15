import styled from 'styled-components';


export const LoginWrapper = styled.div`
    width: 600px;
    margin: 100px auto;
    padding: 100px 60px;
    box-sizing: border-box;
    background: rgba(0,0,0,.1);
    box-shadow: 0 2px 5px rgba(0,0,0, .2);
`;
export const InputWrapper = styled.p`
    position: relative;
    text-align: center;
    font-size: 18px;
    color: #3f3f3f;
    input{
        display: inline-block;
        width: 300px;
        height: 40px;
        border: 1px solid rgba(0,0,0, .2);
        font-size: 14px;
        text-indent: 40px;
        outline: none;
        background-color: #f6f6f6;
        &.inp-count{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
         &.inp-password{
            border-top: none;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &.inp-phoneNum{
            border-top: none;
        }
    }
    .iconfont{
        position: absolute;
        top: 8px;
        left: 92px;
        font-size: 30px;
        color: #969696;
    }
    .btn{
        width: 300px;
        height: 40px;
        margin-top: 30px;
        font-size: 20px;
        outline: none;
        border: none;
        background-color: #3194d0;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
        :hover{
            background-color: #187cb7;
        }
    }
`;
export const LoginTitle = styled.h2`
    margin-bottom: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: 700px;
    span{
        margin: 0 10px;
        color: #969696;
    }
    a{
        display: inline-block;
        padding: 10px;
        border-bottom: 2px solid #ea6f5a;
        border-color: transparent;
        text-decoration: none;
        color: #969696;
        :hover{
            border-color: #ea6f5a;
        }
    }
    .link-underline{
        border-color: #ea6f5a;
        color: #ea6f5a;
    }
`;