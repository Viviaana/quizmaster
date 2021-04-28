import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Questions from "./Questions";

export default class QuizPage extends Component {
  state={
    questions: [], 
    title: ""
  }

  getQuestions(){
    this.setState({title: this.props.match.params.quizName})
  fetch('http://localhost:8081/questions?id='+ this.props.match.params.quizID)
  .then(response => response.json())
  .then(data => this.setState({questions : Array.from(data)})).then(e => console.log(this.state.questions)).catch(err => console.log(err));
  }

  componentDidMount(){
    this.getQuestions()
  }
  render() {
    return (
      <div className="page">
         <Header />
        <div className="quiz">
          <h1>{this.state.title}</h1>
          <Questions questions={this.state.questions}/>
          </div>
      </div>
    );
  }
}
