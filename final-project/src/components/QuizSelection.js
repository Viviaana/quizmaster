import React, { Component } from "react";
import "./QuizSelection.css";
import Header from "./Header";
import Card from "./Card";


export class QuizSelection extends Component {

  state={
    quizzes: []
  }

  getQuizzes(){
  fetch('http://localhost:8081/quizzes')
  .then(response => response.json())
  .then(data => this.setState({quizzes : Array.from(data)})).then(e => console.log(this.state.quizzes)).catch(err => console.log(err));
  }

  componentDidMount(){
    this.getQuizzes()
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="quizlist">
          <div className="title">
            <h1>Select a Quiz</h1>
          </div>
          <div className="cardbox">
              <Card quizzes={this.state.quizzes} />
        </div>
      </div>
      
      </div>
    );
  }
}

export default QuizSelection;
