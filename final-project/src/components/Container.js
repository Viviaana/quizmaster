import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import LoginPage from "./LoginPage";
import QuizSelection from "./QuizSelection";
import AnswerPage from "./AnswerPage";
import QuizPage from "./QuizPage";
import Homepage from "./Homepage";
import EditQuiz from "./EditQuiz";
import {
    TransitionGroup
} from 'react-transition-group'

//Setting up the navigation for the entire app


function Container({ location }) {
    return (
    <div className = "page">
        <TransitionGroup className="transition-group">

        <div className="route-section">
          <Switch location={location}>
            <Route path="/login" component={LoginPage} />
            <Route path="/quizselection" component={QuizSelection} />
            <Route path="/quizpage/:quizID/:quizName" component={QuizPage} />
            <Route path="/editquizpage/:quizID/:quizName" component={EditQuiz} />
            <Route path="/answerpage/:quizID/:quizName" component={AnswerPage} />
            <Route exact path="/" component={Homepage} />
          </Switch>
          </div>
        </TransitionGroup>
    </div>
  );
}

export default withRouter(Container)