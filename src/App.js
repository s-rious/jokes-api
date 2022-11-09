import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [value, setJokes] = useState([])
  useEffect(() => {
    async function Info() {
      var response = await fetch("https://api.chucknorris.io/jokes/random")
      const json = await response.json();
    
    const list = [];
    list.push(
      <div>
        <p>{json.value}</p>
      </div>
    )
    setJokes(list);
    }
    Info();
  }, []);
  return (
    <div id="content">
      <h2>{value}</h2>
      <a href="/">
        <button>New Joke</button>
      </a>
    </div>
  )
};

export default App;