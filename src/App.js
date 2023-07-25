import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Holidays from "./Holidays";

function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="App">
      <header className='App-header'>
        <h1>365 Holidays</h1>
      </header>
      <form>
        <div className="my-4">
          <h4>Select a date to discover national holidays</h4>
        </div>
        <div className='Calendar mb-3'>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            className="date-input"
          />
        </div>
      </form>
      <Holidays />
      <footer className="mt-5 mb-3">
      This app was coded by <a href="https://niawright.netlify.app/" target="_blank" rel="noreferrer">Nia Wright</a> and is open-sourced on <a href="https://github.com/nianokia/calendar" target="_blank" rel="noreferrer">GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
