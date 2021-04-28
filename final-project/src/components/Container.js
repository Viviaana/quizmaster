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
import {
    TransitionGroup
} from 'react-transition-group'


function Container({ location }) {
    return (
    <div className = "page">
        <TransitionGroup className="transition-group">

        <div className="route-section">
          <Switch location={location}>
            <Route path="/login" component={LoginPage} />
            <Route path="/quizselection" component={QuizSelection} />
            <Route path="/quizpage/:quizID/:quizName" component={QuizPage} />
            <Route path="/answerpage" component={AnswerPage} />
            <Route exact path="/" component={Homepage} />
          </Switch>
          </div>
        </TransitionGroup>
    </div>
  );
}

export default withRouter(Container)