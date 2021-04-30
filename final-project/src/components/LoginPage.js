import React, { Component } from "react";
import "./LoginPage.css";
import Login from "./Loginform";
import Header from "./Header";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="colourboxes">
          <div className="darkbluecontainer">
            <div className="lightbluecontainer">
              <div className="logincontainer">
                <h1>Sign In</h1>
                <Login setRedirect={this.setRedirect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
