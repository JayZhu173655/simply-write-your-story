import React, {Component} from 'react';

import {Adversiting} from '../style';


class AdverWrapper extends Component {
    render (){
        return (
            <Adversiting>
                <h1>求职</h1>
                <h2>基本信息</h2>
                <p>姓名：朱灿灿</p>
                <p>性别：男</p>
                <p>年龄：29</p>
                <p>邮箱：<span>zhucancan173655@outlook.com</span></p>
                <h2>意向岗位</h2>
                <p>WEB前端开发</p>
                <h2>教育背景</h2>
                <p>大专</p>
                <p>合肥学院</p>
                <h2>技能知识</h2>
                <p>熟练使用HTML、CSS（CSS3）</p>
                <p>熟练使用div+css构建网页</p>
                <p>熟练使用JS（包括ES6、7、8）</p>
                <p>熟悉React </p>
                <p>并可以使用React和各种插件进行开发</p>
                <p>熟练使用react-router-dom、</p>
                <p>react-redux、redux、axios等</p>
                <p>熟练使用Iconfont</p>
                <p>熟悉前端UI框架（antd、layUI）</p>
                <p>了解node</p>
                <p>了解响应式开发</p>
                <p>了解前后端分离</p>
                <h2>相关经验</h2>
                <p>暂无WEB前端相关经验</p>
            </Adversiting>
        )
    }
}

export default AdverWrapper;