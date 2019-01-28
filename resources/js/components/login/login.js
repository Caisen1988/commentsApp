import React, {Component} from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class Login extends Component {
    loginSubmit(){
       
    }
    render() {
        return (
            <div className="container" id="login">
        <form id="login-form">
          <h3 className="text-center">login</h3>
          <div className="form-group">
            <label>account</label>
            <input type="text" className="form-control" placeholder="Account" ref="loginName" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref="loginPwd" required />
          </div>
          <button type="submit"  className="btn btn-default" onClick={this.loginSubmit}><NavLink to="list">登录</NavLink></button>  <a className="register-class" href="/register">注册</a>
        </form>
      </div>
        )
    }
}

export default Login