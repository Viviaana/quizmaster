import React, { Component } from "react";
import "./Homepage.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export class LoginPage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="introbox">
          <div className="titlebox">
          <h1>Welcome to Quizmaster!</h1>
          <h2>Your #1 source for hosting your own quizzes.</h2>
          </div>
          <div className="loginbutton">
            <p>To access your account, sign in here:</p>
            <Link to="/login">Sign In</Link>
          </div>
          <div className = "icons">
                    <p>Follow us:</p>
                    <div className = "linked">
                    <a href = "https://www.linkedin.com/in/katie-ingham-176116164/"><FaLinkedin /></a>
                    </div>
                    <div className = "git">
                    <a href = "https://github.com/Viviaana"><FaGithubSquare /></a>
                    </div>
                    <div className = "insta">
                    <a href = "https://www.instagram.com/world_of_woolcraft/?hl=en"><FaInstagram /></a>
                    </div>
                    </div>
        </div>
        </div>
      
    );
  }
}

export default LoginPage;
