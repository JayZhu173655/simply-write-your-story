import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WriteArticleWrapper, WriteArticleTitle} from './style';

class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
       
        if(loginStatus){
            return (
                 <WriteArticleWrapper>
                     <WriteArticleTitle>
                         文章标题
                         <input type='text' className='article-title'/>  
                         <textarea className='article-content'/>
                         <button className='submit-article'>提交</button>
                     </WriteArticleTitle>
                 </WriteArticleWrapper>
            )
        } else {
            //<Redirect to='/'/>重定向到首页
            return <Redirect to='/sign-in'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
});

export default connect(mapState, null)(Write);