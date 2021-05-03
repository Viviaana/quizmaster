import React from "react";
import './Header.css';
import LetterQ from './images/Headers/letterQ.jpg'
import { Link } from "react-router-dom";

//Navigation bar at the top of the screen allowing for simple logo changes as this one component will appear each time 

export default function Header() {
  return (
    <div className = "bar">
        <div className = "logo">
        <img src={LetterQ} className = "logoimg" alt="logo" />
        </div>
      <div className = "headertitle">
      <Link to={'/'}><h2>Quizmaster</h2></Link>
      </div>
      <div className = "logout">
      <Link to={'/'}>Logout</Link>
      </div>
    </div>
    
  );
}
