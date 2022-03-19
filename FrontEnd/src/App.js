import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// function App() {
//   getShirts = () => {
//     axios
//       .get("http://localhost:7967/shirts") //could even write '/shirts'
//       .then(() => {
//         const data = response.data;
//         console.log("Data has been collected");
//       })
//       .catch(() => {
//         alert("Error collecting data");
//       });
//   };

const App = () => {
  const [shirts, setShirts] = useState([]);
  // const [imgSrc, setImgSrc] = useState("");
  // const [audioSrc, setAudioSrc] = useState("");
  // const [count, setCount] = useState(0);

  const fetchShirts = async () => {
    return fetch("http://localhost:7967/shirts")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    async function init() {
      const fetchedData = await fetchShirts();
      setShirts(fetchedData);
      // setImgSrc(fetchedData[0].image);
      // setAudioSrc(fetchedData[0].liveaudio.url);
      console.log(fetchedData);
    }

    init();
  }, []);

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
};

export default App;
