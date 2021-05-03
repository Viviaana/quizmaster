import React, { Component } from "react";
import "./EditQuiz.css";
import Header from "./Header";
import Edit from "./Edit";
import { Link, Redirect } from "react-router-dom";

//Edit page allowing admin users to view, edit and add or delete 

export default class EditQuiz extends Component {
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
      questions: [], 
      title: "",
      pathName: "",
      permissions: permission
    }
}

renderRedirect() {
  if (this.state.permissions === null) {
    return <Redirect to='/'/>
  }
  if (this.state.permissions === "View" || this.state.permissions === "Restricted") {
    return <Redirect to={{
      pathname: "/quizselection",
      state: { permissions: this.state.permissions }}} />
  }}

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
        {this.renderRedirect()}
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
