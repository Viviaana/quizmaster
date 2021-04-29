import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      errorMessage: '', 
      user: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  setPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  validateForm() {
    return this.state.email.length >= 5 && this.state.password.length >= 5;
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/quizselection" />;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
      fetch('http://localhost:8081/users?email=' + this.state.email)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: Array.from(data)
        })  
      }).then(f => {this.checkCredentials()}).catch(err => {
        this.setState({
          errorMessage: 'Invalid Email or password'
        })
      });    
  }
  checkCredentials(){
    console.log(this.state.user)

    if (this.state.user[0].email === this.state.email && this.state.user[0].password === this.state.password){
      this.setState({
        redirect: true,
      });
    } else {
      this.setState({
        errorMessage: 'Invalid Email or password'
      })
    }
  }


  render() {
    return (
      <div className="loginform">
        {this.renderRedirect()}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>
              Email
              <br />
            </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.setEmail}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>
              Password
              <br />
            </Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={this.setPassword}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!this.validateForm()}>
            Login
          </Button>
        </Form>
        <h2>{this.state.errorMessage}</h2>
      </div>
    );
  }
}
