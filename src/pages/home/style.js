import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    box-sizing: border-box;
    width: 1280px;
    padding: 0 160px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
    padding-top: 25px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    background-color: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display:block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
export const RecommendList = styled.div`
    width: 280px;
`;
export const RecommendItem = styled.div`
    margin-bottom: 10px;
    .pic {
        width: 280px;
        height: 50px;
    }
    .recommendJum{
        dispaly: blcok;
    }
`;
export const WriteWrapper = styled.div`
    width: 280px;
`;
export const WriteTop = styled.a`
    position: relative;
    display: block;
    width: 280px;
    padding: 10px 22px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    .pic {
        vertical-align: middle;
        width: 60px;
        height: 60px;
    }
`;
export const WriteBottom = styled.div`
    width: 280px;
    padding-top: 30px;
`;
export const DownloadDesc = styled.div`
    display: inline-block;
    width: 143px;
    margin-left: 10px;
    vertical-align: middle;
    .title {
        line-height: 20px;
        font-size: 15px;
        color: #333;
    }
    .desc {
        line-height: 20px;
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;
export const DownloadHide = styled.div`
    display: none;
    position: absolute;
    top: -200px;
    left: 50%;
    width: 186px;
    height: 186px;
    margin-left: -93px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 5px;
    background-color: #fff;
    .pic {
        width: 166px;
        height: 166px;
    }
    ::after{
        position: absolute;
        bottom: -7px;
        left: 50%;
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        margin-left: -6px;
        transform: rotate(45deg);
        background-color: #fff;
        border-bottom: 1px solid rgba(0,0,0, .2);
        border-right: 1px solid rgba(0,0,0, .2);
    }
`;
export const WriteTitle = styled.div`
    overflow: hidden;
    width: 100%;
    font-size: 14px;
    color: #969696;
    .author {
        float: left;
    }
    .switch {
        float: right;
        cursor: pointer;
    }
    .change {
        display: inline-block;
        font-size: 12px;
        margin-right: 5px;
        // 只有块元素可以transform起作用
        transition: transform .2s linear;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;
export const WriteList = styled.ul`
    width: 100%;
    padding-top: 10px; 
`;
export const WriteItem = styled.li`
    overflow: hidden;
    width: 100%;
    margin-top: 15px;
    .item-pic{
        display: block;
        float: left;
    }
    .pic{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #f5f5f5;
    }
`;
export const ItemDesc = styled.div`
    width: 220px;
    overflow: hidden;
    float: right;
    .attention{
        float: right;
        margin-top: 7px;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
    .attention-icon{
        font-size: 13px;
        font-weight: bold;
    }
`;
export const DescLeft = styled.div`
    float: left;
    padding-top: 7px; 
    .desc-title{
        font-size: 14px;
        text-decoration: none;
        color: #333;
    }
    .desc-like{
        margin-top: 10px;
        font-size: 12px;
        color: #969696;
    }
`;
export const BackToTop = styled.div`
    position: fixed;
    bottom: 100px;
    right: 100px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 12px;
    color: #999;
    background-color: #fff;
`;
export const GetMoreList = styled.div`
    width: 625px;
    height: 40px;
    margin: 50px 0;
    line-height: 40px;
    text-align: center;
    border-radius: 40px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
    background-color: #969696;
    border: 1px solid #ccc;
    :hover{
        background-color: #888;
    }
`;