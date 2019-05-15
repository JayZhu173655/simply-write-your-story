import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Write from './components/Write';
import Recommend from './components/Recommend';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackToTop,
    GetMoreList
} from './style';
import {actionCreators} from './store';
//import {Addition, HeaderWrapper} from "../../common/header/style";

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='banner'/>
                    <Topic />
                    <List />
                    <GetMoreList onClick={this.props.getMoreArticles}>获取更多文章</GetMoreList>
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Write />
                </HomeRight>
                {this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>回到顶部</BackToTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow );
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow );
    }

}
const mapState = (state) => ({
        showScroll: state.getIn(['home', 'showScroll'])
    });
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true));
        } else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
    getMoreArticles(){
        const action = actionCreators.getMoreArticleList;
        dispatch(action());
    }
});
export default connect(mapState, mapDispatch)(Home);