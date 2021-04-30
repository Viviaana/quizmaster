import React, { Component } from "react";
import "./EditQuiz.css";
import Header from "./Header";
import Edit from "./Edit";
import { Link } from "react-router-dom";

export default class EditQuiz extends Component {
  state={
    questions: [], 
    title: "",
    pathName: ""
  }

  getURL(){
    var pathArray = window.location.pathname.split('/');
    var newPathname = "";
      for (var i = 2; i < pathArray.length; i++) {
      newPathname += "/";
      newPathname += pathArray[i];
    this.setState({pathName: newPathname})
}
  }
  
  getQuestions(){
    this.setState({title: this.props.match.params.quizName})
  fetch('http://localhost:8081/questions?id='+ this.props.match.params.quizID)
  .then(response => response.json())
  .then(data => this.setState({questions : Array.from(data)})).then(e => console.log(this.state.questions)).catch(err => console.log(err));
  }

  componentDidMount(){
    this.getQuestions()
    this.getURL()
  }
  render() {
    return (
      <div className="page">
         <Header />
        <div className="quiz">
          <h1>{this.state.title}</h1>
          <Edit questions={this.state.questions}/>
          <div className="links">
          <Link to={'/quizpage'+ this.state.pathName}>Update Quiz</Link>
          <Link to={'/quizselection'}>Quiz Selection</Link>
          </div>
          </div>
      </div>
    );
  }
}
