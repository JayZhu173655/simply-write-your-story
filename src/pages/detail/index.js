import React, {Component} from 'react';

import {ArticleWrapper} from './style';
import ArticleContent from './components/article';
import AdverWrapper from './components/adversiting';

class Detail extends Component {
    render() {
        return (
            <ArticleWrapper>
                <ArticleContent />
                <AdverWrapper />
            </ArticleWrapper>
        )
    }
}
export default Detail;