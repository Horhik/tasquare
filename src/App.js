import React from 'react';
import DayDate from "./components/header/date";
import NavBar from "./components/navBar/navBar";
import TaskCreator from "./components/taskCreator/taskCreator"

function App() {
  return (
    <div className="App">
        <DayDate/>
        <TaskCreator/>
        <NavBar/>
    </div>
  );
}

export default App;
