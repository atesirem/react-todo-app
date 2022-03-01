import "./assets/css/Reset.css";
import "./assets/css/Layout.css";
import "./App.css";

import Header from "./components/Header/Header";
// import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
// import TodoList from "./components/TodoList/TodoList";

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
