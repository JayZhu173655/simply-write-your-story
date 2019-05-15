import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/signIn/store';


/*
const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        <i className='iconfont'>&#xea29;</i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>区块链</SearchInfoItem>
                    <SearchInfoItem>小程序</SearchInfoItem>
                    <SearchInfoItem>VUE</SearchInfoItem>
                    <SearchInfoItem>React</SearchInfoItem>
                    <SearchInfoItem>毕业</SearchInfoItem>
                    <SearchInfoItem>故事</SearchInfoItem>
                    <SearchInfoItem>PHP</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null;
    }
};

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'><i className='iconfont'>&#xe7bf;</i>首页</NavItem>
                <NavItem className='left'><i className='iconfont'>&#xe7b2;</i>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right '>Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={300}
                        className="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe7d6;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'><i className='iconfont'>&#xe7d9;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
};
*/
// Header组件可以简写成无状态组件 提高性能
class Header extends PureComponent {

    getListArea = () => {
        const {focused, list, page, totalPage, handleMouseEnter,handleMouseLeave, mouseIn,handleChangePage} = this.props;
        // immutable数组转换成普通的数组
        const newList = list.toJS();
        const pageList =  [];
        const len = newList.length;
        if(len){
            for(let i = (page - 1) * 10; i < ((page * 10) > len ? len : page * 10); i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xea29;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    };
    render() {
        const {focused, handleInputFocus, handleInputBlur, list, loginStatus,handleSignOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/" >
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'><i className='iconfont'>&#xe7bf;</i>首页</NavItem>
                    <NavItem className='left'><i className='iconfont'>&#xe7b2;</i>下载App</NavItem>

                        {
                            (() => {
                                if(!loginStatus){
                                    return (
                                        <NavItem className='right'>
                                            <Link to='/sign-in'>登录 </Link>
                                        </NavItem>
                                    )
                                } else{
                                    return <NavItem className='right' onClick={handleSignOut} style={{cursor: 'pointer'}}>退出</NavItem>
                                 }
                            })()
                        }

                        <NavItem className='right '>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            className="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={ () => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe7d6;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <Link to='/write'>
                            <i className='iconfont'>&#xe7d9;</i>
                            写文章
                        </Link>
                    </Button>
                    {!loginStatus ? <Button className='reg'><Link to='/sign-up'>注册</Link></Button> : ''}
                </Addition>
            </HeaderWrapper>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        loginStatus: state.getIn(['login', 'loginStatus'])
        // 上面写法和下面写法作用一样
        //focused: state.get('header').get('focused')
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) &&dispatch(actionCreators.getList());
            /*
            // 可以简写成上面形式
            if(list.size > 0){
                dispatch(actionCreators.getList());
            }
            */
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");

            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            } else{
                originAngle = 0;
            }
            originAngle += 360;
            spin.style.transform = `rotate(${originAngle}deg)`;

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            } else{
                dispatch(actionCreators.changePage(1));
            }
        },
        handleSignOut(){
            dispatch(loginActionCreators.changeSigninStatus());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);