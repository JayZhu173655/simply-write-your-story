import styled from 'styled-components';

export const WriteArticleWrapper = styled.div`
    width: 900px
    margin: 80px auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
`;

export const WriteArticleTitle = styled.div`
    padding: 50px 100px;
    font-size: 16px;
    color: #333;
    .article-title{
        width: 300px;
        height: 30px;
        margin-left: 10px;
        outline: none;
        font-size: 20px;
        color: #333;
    }
    .article-content{
        display: block;
        width: 600px;
        height: 400px;
        margin-top: 40px;
        outline: none;
        resize: none;
        font-size: 16px;
        color: #555;
    }
    .submit-article{
        display: block;
        width: 100px;
        height: 40px;
        margin-top: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        background-color: #6495ED;
    }
`;