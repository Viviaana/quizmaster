import React from "react";
import "./QuizPage.css";

//This component generates each question with the matching answers, hiding answers if user is set to Restricted 

export default function Question(props) {
  const question = props.questions.map((question, index) => (
      <div className="question">
        <p><b>{question.question}</b></p>
        <div className="answergrid">
          <ul className={props.view}>
            {question.answers.map(answer => 
            <li>{answer}</li>
            )}
          </ul>
        </div>
      </div>
  ));
  return <div className="quiz">{question}</div>;
}
