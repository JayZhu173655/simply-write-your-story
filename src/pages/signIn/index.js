import React, {PureComponent} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import {LoginWrapper, InputWrapper, LoginTitle} from './style';

class Login extends PureComponent {
    render() {
        if(!this.props.loginStatus){
            return (
                <LoginWrapper>
                    <LoginTitle>
                        <Link to="./sign-in" className='link-underline'>登录</Link>
                        <span>.</span>
                        <Link to="./sign-up">注册</Link>
                    </LoginTitle>
                    <InputWrapper>
                        <i className='iconfont icon-count'>&#xe618;</i>
                        <input
                            className='inp-count'
                            type="text"
                            placeholder='手机号或者邮箱'
                            ref={(inpCount) => {this.inpCount=inpCount}}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <i className='iconfont icon-password'>&#xeb6a;</i>
                        <input
                            className='inp-password'
                            type="password"
                            placeholder='密码'
                            ref={(inpPassword) => {this.inpPassword=inpPassword}}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <button onClick={() => {this.props.handleSignIn(this.inpCount, this.inpPassword)}} className='btn'>登录</button>
                    </InputWrapper>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'/>
        }

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatch = (dispatch) => {
    return ({
        handleSignIn(countElement, passwordElement){
            if(countElement.value.trim() && passwordElement.value.trim()){
                const action = actionCreators.changeLoginStatus();

                dispatch(action);
            } else if(!countElement.value.trim()){
                countElement.value = '';
                passwordElement.value = '';
                alert("请按正确填写登录账号");
            } else if(!passwordElement.value.trim()){
                passwordElement.value = '';
                alert("请填写密码");
            }
        }
    })
};

export default connect(mapState, mapDispatch)(Login);