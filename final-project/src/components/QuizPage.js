import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class QuizPage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="quiz">
          <h1>Classic Literature</h1>
          <div className="question">
            <h2>1. What is the question?</h2>
            <div className="answergrid">
              <ul>
                <li>A. Yes</li>
                <li>B. No</li>
                <li>C. Maybe</li>
                <li>D. Definitely</li>
              </ul>
            </div>
            <div className="checkbutton">
              <Link to="/answerpage">
                <button>Check Answers</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
