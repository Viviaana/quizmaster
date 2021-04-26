import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import LoginPage from "./LoginPage";
import QuizSelection from "./QuizSelection";
import Homepage from "./Homepage";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'


function Container({ location }) {
    return (
    <div className = "page">
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 400, exit: 400 }}
                classNames="fade"
            >
        <div className="route-section">
          <Switch location={location}>
            <Route path="/login" component={LoginPage} />
            <Route path="/quizselection" component={QuizSelection} />
            <Route exact path="/" component={Homepage} />
          </Switch>
          </div>
        </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default withRouter(Container)