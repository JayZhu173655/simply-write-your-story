import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {RecommendList ,RecommendItem} from '../style';

class Recommend extends Component {
    render() {
        const {list} = this.props;
        return (
            <RecommendList>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem key={item.get("imgUrl")}>
                                <Link className='recommendJum' to='/'>
                                    <img className= "pic" src={item.get("imgUrl")} alt={item.get("alt")}/>
                                </Link>    
                            </RecommendItem>
                        )
                    })
                }
            </RecommendList>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(["home", "recommend"])
});
export default connect(mapState, null)(Recommend);