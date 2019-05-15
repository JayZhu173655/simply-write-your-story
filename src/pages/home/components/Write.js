import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    WriteWrapper,
    WriteTop,
    WriteBottom,
    DownloadDesc,
    WriteTitle,
    WriteList,
    WriteItem,
    ItemDesc,
    DownloadHide,
    DescLeft
} from '../style';
import {getAuthors, changePage} from "../store/actionCreators";

class Write extends Component {

    getAuthorsList = () => {
        const {handleChangeAuthors, page, totalPage, users} = this.props;
        const newUsers = users.toJS();
        const len = newUsers.length;
        const usersList = [];
        if(len){
            for(let i = (page - 1) * 5; i < ((page * 5) > len ? len : page * 5); i++){
                usersList.push(newUsers[i])
            }
        }
        return (
            <WriteBottom>
                <WriteTitle>
                    <p className='author'>推荐作者</p>
                    <p
                        className='switch'
                        onClick={() => handleChangeAuthors(page,totalPage, this.spinIcon)}
                    >
                        <i
                            className='iconfont change'
                            ref={(icon) => {this.spinIcon = icon}}
                        >&#xe7ad;</i>
                        换一批
                    </p>
                </WriteTitle>
                <WriteList>
                    {
                        usersList.map((item) => {
                            return (
                                <WriteItem key={item.nickname}>
                                    <Link className="item-pic" to="/">
                                        <img  className="pic" src={item.avatar_source} alt="12"/>
                                    </Link>
                                    <ItemDesc>
                                        <DescLeft>
                                            <Link className="desc-title" to="/">{item.nickname}</Link>
                                            <p className="desc-like">
                                                写了{Number((item.total_wordage / 1000).toString().match(/^\d+(?:\.\d{0,1})?/))}k字 · {Number((item.total_likes_count / 1000).toString().match(/^\d+(?:\.\d{0,1})?/))}k喜欢
                                            </p>
                                        </DescLeft>
                                        <p className='attention'><i className='iconfont attention-icon'>&#xe6b9;</i>关注</p>
                                    </ItemDesc>
                                </WriteItem>
                            )
                        })
                    }
                </WriteList>
            </WriteBottom>
        )
    };
    componentWillMount() {
        this.props.getAuthorList(this.props.users)
    }

    render() {
        return (
            <WriteWrapper>
                <WriteTop
                    onMouseEnter={() => {this.hideElement.style = "display: block"}}
                    onMouseLeave={() => {this.hideElement.style = "display: none"}}
                >
                    <img className="pic" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="下载app"/>
                    <DownloadDesc>
                        <p className= 'title'>下载简书手机App ></p>
                        <p className= 'desc'>随时随地发现和创作内容</p>
                        <DownloadHide
                            ref={(hideElement) => { this.hideElement = hideElement}}
                        >
                            <img className="pic" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="sd"/>
                        </DownloadHide>
                    </DownloadDesc>
                </WriteTop>
                {this.getAuthorsList()}
            </WriteWrapper>
        )
    }

}
const mapState = (state) => {
    return {
        users: state.getIn(['home', 'users']),
        page: state.getIn(['home', 'page']),
        totalPage: state.getIn(['home', 'totalPage'])
    }
};
const mapDispatch = (dispatch) => {
    return {
        handleChangeAuthors(page, totalPage, spin){

            let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");

            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            } else{
                originAngle = 0;
            }
            originAngle += 360;
            spin.style.transform = `rotate(${originAngle}deg)`;

            if(page < totalPage){
                dispatch(changePage(page + 1));
            } else{
                dispatch(changePage(1));
            }
        },
        getAuthorList(list){
            if(list.size === 0) {
                dispatch(getAuthors());
            }
        }
    }
};
export default connect(mapState, mapDispatch)(Write);