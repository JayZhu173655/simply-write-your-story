import React, {Component} from 'react';
import ContentWrapper from './articleContent';
import {ArticleContentWrapper} from '../style';

class ArticleContent extends Component {
    render(){
        return (
            <ArticleContentWrapper>
                <ContentWrapper />
            </ArticleContentWrapper>
        )
    }
}


export default ArticleContent;