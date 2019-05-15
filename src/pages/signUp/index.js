import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {LoginWrapper, InputWrapper, LoginTitle} from '../signIn/style';

class SignUp extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginTitle>
                    <Link to="./sign-in">登录</Link>
                    <span>.</span>
                    <Link to="./sign-up" className='link-underline'>注册</Link>
                </LoginTitle>
                <InputWrapper>
                    <i className='iconfont icon-count'>&#xe618;</i>
                    <input className='inp-count' type="text" placeholder='你的昵称'/>
                </InputWrapper>
                <InputWrapper>
                    <i className='iconfont icon-phoneNum'>&#xe637;</i>
                    <input className='inp-phoneNum' type="text" placeholder='手机号'/>
                </InputWrapper>
                <InputWrapper>
                    <i className='iconfont icon-password'>&#xeb6a;</i>
                    <input className='inp-password' type="password" placeholder='密码'/>
                </InputWrapper>
                <InputWrapper>
                    <button className='btn'>注册</button>
                </InputWrapper>
            </LoginWrapper>
        )
    }
}

export default SignUp;