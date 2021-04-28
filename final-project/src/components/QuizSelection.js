import React, { Component } from "react";
import "./QuizSelection.css";
import Header from "./Header";
import history1 from "./images/Headers/history1.jpg";
import history2 from "./images/Headers/history2.jpg";
import history3 from "./images/Headers/history3.jpg";
import history4 from "./images/Headers/history4.jpg";
import { Link } from "react-router-dom";


export class QuizSelection extends Component {
  render() {
    return (
      <div className="page">
        {this.getQuizzes}
        <Header />

        <div className="quizlist">
          <div className="title">
            <h1>Select a Quiz</h1>
          </div>
          <div className="cardbox">
            
            <div className="category">
            <h2>History</h2>
            </div>
            <div className="cardlist">
          <Link to="/quizpage">
            <div className="quizcard">
              <img src={history1} alt="Classic Literature" />
              <div className="quizbutton">
                <button>Classic Literature</button>
              </div>
            </div>
          </Link>
          <Link to="/quizpage">
            <div className="quizcard">
              <img src={history2} alt="Classic Literature" />
              <div className="quizbutton">
                <button>The Egyptians</button>
              </div>
            </div>
          </Link>
          <Link to="/quizpage">
            <div className="quizcard">
              <img src={history3} alt="World War II" />
              <div className="quizbutton">
                <button>World War II</button>
              </div>
            </div>
          </Link>
          <Link to="/quizpage">
            <div className="quizcard">
              <img src={history4} alt="The Romans" />
              <div className="quizbutton">
                <button>The Romans</button>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
      
      </div>
    );
  }
}

export default QuizSelection;
