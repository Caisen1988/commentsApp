import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import Login from './login/login'
import Register from './register/register'
import List from './list/list'
import Detail from './list/details'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
);

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