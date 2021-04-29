import React from "react";


export default function Question(props) {
  const question = props.questions.map((question, index) => (
      <div className="question">
        <h2>{question.question}</h2>
        <div className="answergrid">
          <ul>
            {question.answers.map(answer => 
            <li>{answer}</li>
            )}
          </ul>
        </div>
      </div>
  ));
  return <div className="quiz">{question}</div>;
}
