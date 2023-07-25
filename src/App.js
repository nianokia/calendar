import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
          />
        </div>
      </form>
    </div>
  );
}

export default App;
