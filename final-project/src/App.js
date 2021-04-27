import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div>
        <Container />
      </div>
    </Router>
  );
}

export default App;
