import React from "react";
import './Header.css';
import LetterQ from './images/Headers/letterQ.jpg'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className = "bar">
        <div className = "logo">
        <img src={LetterQ} className = "logoimg" alt="logo" />
        </div>
      <div className = "title">
      <Link to={'/'}><h2>Quizmaster</h2></Link>
      </div>
      <div className = "logout">
      <Link to={'/'}>Logout</Link>
      </div>
    </div>
    
  );
}
