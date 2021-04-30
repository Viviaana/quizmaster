import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const cards = props.quizzes.map((quiz, index) => (
    <div className="quizcard" key={quiz._id}>
      <Link to={{
        pathname: '/quizpage/'+quiz._id+ "/" + quiz.name,
      state: {permissions: props.permissions}}}>
        <div className="quizcard">
          <img src={quiz.image} alt={quiz.name} />
          <div className="quizbutton">
            <button>{quiz.name}</button>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div className="cardlist">{cards}</div>;
}
