import React, {Component} from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class TopNav extends Component {
    render() {
        return (
          <div>
          <nav class="navbar navbar-inverse navbar-fixed-top">
          <a class="navbar-brand" href="#">KEYOU</a>

          <ul class="nav nav-sidebar">
            
            <li class="active">
              <a href="#"><NavLink  to="/login">注销</NavLink> <span class="sr-only">(current)</span></a>
            </li>
            <li>
              <a href="list.jsp">welcome kyrie</a>
            </li>
            <li>
              <a><NavLink  to="/list">首页</NavLink></a>
            </li>
            
          </ul>
         </nav>
          </div>
        
        )
    }
}

export default TopNav