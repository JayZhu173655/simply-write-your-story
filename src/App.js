import React, {Component, Fragment}from 'react';
// 管理store，让每个子组件都可以获取store
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store'
import Header from './common/header';
import {GlobalStyle} from './style'
import {IconFontStyle} from './statics/iconfont/iconfont'
import Home from './pages/home';
import Detail from './pages/detail';
import History from './pages/history';
import Footer from './common/footer';
import Login from './pages/signIn';
import SignUp from './pages/signUp';
import Write from './pages/write';


class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <IconFontStyle />
                    <GlobalStyle />
                    <BrowserRouter>
                        <Header />
                        <Route path='/' exact component={Home} />
                        <Route path='/detail' exact component={Detail} />
                        <Route path='/history' exact component={History} />
                        <Route path='/sign-in' exact component={Login} />
                        <Route path='/sign-up' exact component={SignUp} />
                        <Route path='/write' exact component={Write} />
                        <Footer />
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App;
