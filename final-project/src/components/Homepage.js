import React, { Component } from 'react';
import './Homepage.css';
import Header from './Header';

export class LoginPage extends Component {
  render() {
      return (
        <div className="page">
          <Header />
            <div className = "introbox">
                <h1>Welcome to Quizmaster!</h1>
                <h2>Your #1 source for hosting your own quizzes.</h2>
                <p>To access your account, sign in here:</p>
                <button>Sign In</button>
            </div>
        </div>
      )
  }
}

export default LoginPage
