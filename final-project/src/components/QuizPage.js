import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import Questions from "./Questions";

export default class QuizPage extends Component {
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
  }

  getURL() {
    var pathArray = window.location.pathname.split("/");
    var newPathname = "";
    for (var i = 2; i < pathArray.length; i++) {
      newPathname += "/";
      newPathname += pathArray[i];
      this.setState({ pathName: newPathname });
    }
  }

  getQuestions() {
    this.setState({ title: this.props.match.params.quizName });
    fetch(
      "http://localhost:8081/questions?id=" + this.props.match.params.quizID
    )
      .then((response) => response.json())
      .then((data) => this.setState({ questions: Array.from(data) }))
      .then((e) => console.log(this.state.questions))
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getQuestions();
    this.getURL();
  }


  render() {
    return (
      <div className="page">
        <Header />
        {this.renderRedirect()}
        <div className="quiz">
          <h1>{this.state.title}</h1>
          <Questions
            questions={this.state.questions}
            view={this.state.permissions}
          />
          <div className="links">
            <Link className={this.state.permissions}
              to={{
                pathname: "/answerpage"+ this.state.pathName,
                state: { permissions: this.state.permissions },
              }}
            >
              See Answers
            </Link>
            <Link className={this.state.permissions}
              to={{ 
                pathname: "/editquizpage"+ this.state.pathName,
                state: { permissions: this.state.permissions },
              }}>Edit Quiz</Link>
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
