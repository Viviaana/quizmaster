import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import Answer from "./Answer";
import { Link } from "react-router-dom";

export default class AnswerPage extends Component {
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
          <Answer questions={this.state.questions}/>
          <Link to={'/quizselection'}>Choose Another Quiz</Link>
          </div>
      </div>
    );
  }
}
