import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const cards = props.quizzes.map((quiz, index) => (
    <div classname="quizcard" key={quiz._id}>
      <Link to={'/quizpage/'+quiz._id+ "/" + quiz.name}>
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
