import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ListItem, ListInfo} from '../style';


class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {list.map((item,index) => {
                    return (
                        <Link to='./detail'  key={index}>
                            <ListItem>
                                <img className='pic' src= {item.get("imgUrl")} alt= {item.get("title")}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get("title")}</h3>
                                    <p className='desc'>{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )}
                )}
            </div>
        )
    }
}
const mapState = (state) => ({
    // 获取数据需要多次调用get方法时可以用getIn方法
    // articleList: state.get('home').get('articleList')
    list: state.getIn(["home", "articleList"])
});
export default connect(mapState, null)(List);