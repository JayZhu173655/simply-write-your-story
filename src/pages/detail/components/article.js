import React, {PureComponent} from 'react';
import ContentWrapper from './articleContent';
import {ArticleContentWrapper} from '../style';

class ArticleContent extends PureComponent {
    render(){
        return (
            <ArticleContentWrapper>
                <ContentWrapper />
            </ArticleContentWrapper>
        )
    }
}


export default ArticleContent;