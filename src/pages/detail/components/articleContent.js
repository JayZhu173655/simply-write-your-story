import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {TitleWrapper, AuthorInfo, AboutAuthor,AuthorInfomation, ArticleInfomation, ArticleContentDetail} from '../style';
import {getContentList} from '../store/actionCreators';


class ContentWrapper extends PureComponent {
    render(){
        return (
            <Fragment>
                <TitleWrapper>
                    <h1 className='article-title'>《都挺好》婚姻中的3种男人：一个伪君子，一个妈宝男，一个自私鬼。</h1>
                    <AuthorInfo>
                        <a className="pic-link" href="/">
                            <img
                                className="author-pic"
                                src="http://upload.jianshu.io/users/upload_avatars/5395155/b3461caf-5f57-4a22-959d-28367ba831ac.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
                                alt="作者"
                            />
                        </a>
                        <AboutAuthor>
                            <AuthorInfomation>
                                <a className="author-name about-author" href="/">纯纯姐</a>
                                <a className="flow-author about-author" href="/">+&nbsp;关注</a>
                            </AuthorInfomation>
                            <ArticleInfomation>
                                <span className='article-time article-about'>2019.03.16 10:28</span>
                                <span className='article-size article-about'>字数 3742</span>
                                <span className='article-read article-about'>阅读 1458</span>
                                <span className='article-commend article-about'>评论 7</span>
                                <span className='article-like article-about'>喜欢 48</span>
                            </ArticleInfomation>
                        </AboutAuthor>
                    </AuthorInfo>
                </TitleWrapper>
                <ArticleContentDetail>
                    {
                        this.props.contents.map((item) => {
                           if(item.get("img-show")){
                               return (
                                   <Fragment key={item.get('id')}>
                                       <p className='article-text'>{item.get('p-content')}</p>
                                       <img  className="article-img" src={item.get("img-url")} alt="flower"/>
                                   </Fragment>
                               )
                           } else {
                               return  <p className="article-text" key={item.get('id')}>{item.get('p-content')}</p>
                           }
                        })
                    }
                </ArticleContentDetail>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getArticleContent();
    }
}
const mapState = (state) => ({
    contents: state.getIn(['detail', 'contents'])
});
const mapDispatch = (dispatch) => {
    return ({
        getArticleContent(){
            dispatch(getContentList())
        }
    })
};
export default connect(mapState, mapDispatch)(ContentWrapper);