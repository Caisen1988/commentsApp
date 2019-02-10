import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.register = this.register.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOk() {
    if (!this.state.username) {
      message.warn('用户名不能为空')
    } else if (!this.state.password) {
      message.warn('密码不能为空')
    } else {
      this.register(this.state)
    }
  }

  register({ username, password }) {
    axios.post('/user/register', {
      username,
      password,
    }).then(res => {
      if (res.status === 201 && res.data.code === 0) {
        message.success('注册成功, 请登录~', 1)
        this.setState({
          username: '',
          password: ''
        })
      } else {
        this.props.registerFailue(res.data.msg)
        message.error(res.data.msg, 1)
      }
    }).catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div className="container" id="login">
        <form id="login-form">
          <h3 className="text-center">Register</h3>
          <div className="form-group">
            <label>account</label>
            <input
              type="text"
              className="form-control"
              placeholder="Account"
              ref="loginName"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref="loginPwd"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="">
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleOk}>注册</button>
        </form>
      </div>
    )
  }
}

export default Register