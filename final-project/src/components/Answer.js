import React from "react";


export default function Answer(props) {
  const answer = props.questions.map((question, index) => (
      <div className="question">
        <h2>{question.question}</h2>
        <div className="answergrid">
            <p>Correct answer: {question.correct}</p>
          <p>{question.hint}</p>
        </div>
      </div>
  ));
  return <div className="quiz">{answer}</div>;
}
