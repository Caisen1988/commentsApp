require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/login/Login'
import Register from './components/register/Register'
import CommentApp from './components/CommentApp'
import List from './components/list/List'
import Detail from './components/list/Details'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css'


// ReactDOM.render((
//   <BrowserRouter>
//   <Switch>
//     <Route path="/login" exact  component={Login}/>
//     <Route path="/register" exact  component={Register}/>
//     <Route path="/" component={List}/>
//     <Route path="/detail" component={Detail}/>
//     <Route path="/comment" component={CommentApp}/>
//     </Switch>
//   </BrowserRouter>
// ), document.getElementById('root'));

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact  component={Login}/>
                        <Route path="/register" exact  component={Register}/>
                     </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);