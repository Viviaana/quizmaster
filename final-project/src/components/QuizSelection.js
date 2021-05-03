import React, { Component  } from "react";
import "./QuizSelection.css";
import Header from "./Header";
import Card from "./Card";
import { Redirect } from "react-router-dom";

export class QuizSelection extends Component {
  constructor(props) {
    super(props);
    //adding permission null as a default so the state isn't empty when the page loads if the normal route is ignored
    var permission;
    if(this.props.location.state && this.props.location.state.permissions){
      permission = this.props.location.state.permissions  
    } else{
      permission = null
    } 
    this.state={
      quizzes: [],
      permissions: permission
    }
}

renderRedirect() {
  if (this.state.permissions === null) {
    return <Redirect to='/'/>
  }}

  getQuizzes(){
  fetch('http://localhost:8081/quizzes')
  .then(response => response.json())
  .then(data => this.setState({quizzes : Array.from(data)})).then(e => console.log(this.state.quizzes)).catch(err => console.log(err));
  }


  componentDidMount(){
    this.getQuizzes();
  }

  render() {
    return (
      <div className="page">
        {this.renderRedirect()}
        <Header />
        <div className="quizlist">
          <div className="title">
            <h1>Select a Quiz</h1>
          </div>
          <div className="cardbox">
              <Card quizzes={this.state.quizzes} permissions={this.state.permissions} />
        </div>
      </div>
      </div>
    );
  }
}

export default QuizSelection;
