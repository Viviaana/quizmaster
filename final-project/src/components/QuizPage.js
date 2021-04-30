import React, { Component } from "react";
import "./QuizPage.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Questions from "./Questions";

export default class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      title: "",
      pathName: "",
      permissions: this.props.location.state.permissions,
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
        {this.renderRedirect()}
        <Header />
        <div className="quiz">
          <h1>{this.state.title}</h1>
          <Questions
            questions={this.state.questions}
            view={this.state.permissions}
          />
          <div className="links">
            <Link
              to={{
                pathname: "/answerpage"+ this.state.pathName,
                state: { permissions: this.state.user[0].permission },
              }}
            >
              See Answers
            </Link>
            <Link
              to={{
                pathname: "/editquizpage"+ this.state.pathName,
                state: { permissions: this.state.user[0].permission },
              }}>Edit Quiz</Link>
            <Link
              to={{
                pathname: "/quizselection",
                state: { permissions: this.state.user[0].permission },
              }}>Quiz Selection</Link>
          </div>
        </div>
      </div>
    );
  }
}
