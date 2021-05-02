import React from "react";

//Component for rendering a list of questions with just the correct answer and some additional information to be used within the answer page

export default function Answer(props) {
  const answer = props.questions.map((question, index) => (
      <div className="question">
        <p><b>{question.question}</b></p>
        <div className="answergrid">
            <p>Correct answer: {question.correct}</p>
          <p>{question.hint}</p>
        </div>
      </div>
  ));
  return <div className="quiz">{answer}</div>;
}
