import React from "react";
import './Header.css';
import LetterQ from './images/Headers/letterQ.jpg'

export default function Header() {
  return (
    <div className = "bar">
        <div className = "logo">
        <img src={LetterQ} className = "logoimg" alt="logo" />
        </div>
      <div className = "title">
          <h2>Quizmaster</h2>
      </div>
    </div>
    
  );
}
