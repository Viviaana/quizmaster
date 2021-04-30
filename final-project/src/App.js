import React, { useState } from 'react';
import AppContext from './components/AppContext';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";


function App() {
  const [currentUserRole, setRolevalue] = useState('');

    const userSettings = {
      userRole: currentUserRole,
      setRolevalue,
    };

  return (
    <AppContext.Provider value={userSettings}>
    <Router>
      <div>
        <Container />
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
