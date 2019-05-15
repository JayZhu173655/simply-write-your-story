import React, {PureComponent, Fragment} from 'react';
import {connect} from "react-redux";
import {FooterWrapper, FooterItem} from './style';
import {actionCreators} from '../header/store';

class Footer extends PureComponent {
    render(){
        return (
            <FooterWrapper>
                <ul className='item-wrapper'>
                    <FooterItem>
                        {
                            this.props.footerList.map((item, index) => {
                                if(index < (this.props.footerList.toJS().length - 2)){
                                    return (
                                        <Fragment key={item}>
                                            <a className='jump-to' href='/'>{item}</a> 
                                            <em className='point'>.</em>
                                        </Fragment>    
                                    )
                                } else{
                                    return (
                                        <Fragment key={item}>
                                            <a className='jump-to' href='/'>{item}</a> 
                                        </Fragment>    
                                    )
                                }    
                            })
                        }
                    </FooterItem>
                </ul> 
            </FooterWrapper>
        )
    }
    
    componentDidMount(){
        this.props.changeFooterList();
    }
}
const mapState = (state) => ({
    footerList: state.getIn(['header', 'footList'])
});
const mapDispatch = (dispatch) => ({
    changeFooterList(){
        dispatch(actionCreators.getFooterList());
    }
});
export default connect(mapState, mapDispatch)(Footer);