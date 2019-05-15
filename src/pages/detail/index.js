import React, {PureComponent} from 'react';

import {ArticleWrapper} from './style';
import ArticleContent from './components/article';
import AdverWrapper from './components/adversiting';

class Detail extends PureComponent {
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