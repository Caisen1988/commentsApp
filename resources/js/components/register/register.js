import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  // onChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  // handleOk() {
  //   if (!this.state.username) {
  //     message.warn('用户名不能为空');
  //   } else if (!this.state.password) {
  //     message.warn('密码不能为空')
  //   } else {
  //     this.register(this.state)
  //   }
  // }

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
        <form id="login-form" onSubmit={this.onSubmit}>
          <h3 className="text-center">Register</h3>

          <div className="form-group">
            <label>Account</label>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
            />
          </div>

          <div className="form-group">
          <label>Password Confirmation</label>
          <input
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>

          <div className="form-group">
            <button className="btn btn-default">注册</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register