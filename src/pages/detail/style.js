import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 60px auto;
`;
export const ArticleContentWrapper = styled.div`
    float: left;
    width: 625px;
`;
export const TitleWrapper = styled.div`
    width: 625px;
    .article-title {
        width: 100%;
        line-height: 50px;
        font-size: 34px;
        font-weight: bolder;
        color: #000;
    }
`;
export const AuthorInfo = styled.div`
    overflow: hidden;
    width: 625px;
    margin-top: 20px;
    .pic-link{
        float: left;
        display: inline-block;
    }
    .author-pic{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
`;
export const AboutAuthor = styled.div`
    float: left;
    width: 500px;
    margin-top: 10px;
    margin-left: 10px;
`;
export const AuthorInfomation = styled.p`
    .about-author{
        text-decoration: none;
    }
    .author-name{
        font-size: 16px;
        color: #2f2f2f;
    }
    .flow-author{
        display: inline-block;
        padding: 2px 8px;
        margin-left: 5px;
        border-radius: 8px;
        font-size: 12px;
        color: #fff;
        background-color: #3db922;
    }
`;
export const ArticleInfomation = styled.p`
    line-height: 20px;
    font-size: 12px;
    color: #969696;
     .article-about{
        margin-right: 10px;
     }
`;
export const ArticleContentDetail = styled.div`
    width: 625px;
    .article-text{
        margin: 20px 0;
        line-height: 1.7em
        font-size: 16px;
        color:#2f2f2f;
    }
    .article-img{
        width: 625px;
        box-sizing: border-box;
    }
    .article-bold{
        font-size: 20px;
        font-weight: 500;
        color: #000;
    }
`;
export const Adversiting = styled.div`
    float: right;
    width: 260px;
    margin-top: 80px; 
    padding-bottom: 30px;
    border: 1px solid rgba(0,0,0, .3);
    box-shadow: 0 2px 8px rgba(0,0,0, .3);
    background-color: rgba(0,0,0, .1);
    h2{
        margin-left: 5px;
        line-height: 30px;
        font-size: 18px;
        color: #333;
        font-weight: bold;
    }
    p{
        line-height: 20px;
        text-indent: 1em;
        font-size: 14px;
    }
    span{
        font-size: 13px;
    }
    h1{
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        letter-spacing:  2em;
    }
`;