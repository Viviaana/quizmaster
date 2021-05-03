import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import Answer from "./Answer";
import { Link, Redirect } from "react-router-dom";

//The page that shows the questions with just the correct answer visible, not accessible for viewonly users


export default class AnswerPage extends Component {
  constructor(props) {
    super(props);
        //adding permission null as a default so the state isn't empty when the page loads if the normal route is ignored
        var permission;
        if(this.props.location.state && this.props.location.state.permissions){
          permission = this.props.location.state.permissions  
        } else{
          permission = null
        } 
    this.state = {
      questions: [],
      title: "",
      pathName: "",
      permissions: permission,
    };
  }

  renderRedirect() {
    if (this.state.permissions === null) {
      return <Redirect to="/" />;
    }
    if (this.state.permissions === "Restricted") {
      return <Redirect to={{
        pathname: "/quizselection",
        state: { permissions: this.state.permissions }}} />;
    }
  }
  
  getQuestions(){
    this.setState({title: this.props.match.params.quizName})
  fetch('http://localhost:8081/questions?id='+ this.props.match.params.quizID)
  .then(response => response.json())
  .then(data => this.setState({questions : Array.from(data)})).then(e => console.log(this.state.questions)).catch(err => console.log(err));
  }

  componentDidMount(){
    this.getQuestions();
  }
  render() {
    return (
      <div className="page">
        {this.renderRedirect()}
         <Header />
        <div className="quiz">
          <h1>{this.state.title}</h1>
          <Answer questions={this.state.questions}/>
          <div className="links">
          <Link
              to={{
                pathname: "/quizselection",
                state: { permissions: this.state.permissions },
              }}>Quiz Selection</Link>
          </div>
          </div>
      </div>
    );
  }
}
