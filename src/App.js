import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var url = document.location.hash,
    hash = url.split('&')[0];

if (hash) {
  console.log(hash)
   let news= hash.split("").slice(14).join('')
   console.log(news)
   console.log(hash)
   

} else {
    // do something else
}
  console.log(document.location.hash)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
