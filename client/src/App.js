import React from 'react';
import axios from 'axios';
import 'dotenv/config';

function App() {
  console.log(process.env.REACT_APP_URL);
  axios
    .get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_SERVER_PORT}`)
    .then(res => console.log(res));
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
