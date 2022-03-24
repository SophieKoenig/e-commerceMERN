import "./App.css";
import React from 'react';

function LandingPage() {
  return (
    <div>
        <header className="App-header">
        {/* <img src="./shirts.jpg" className="shirtsImg" alt="several shirts" /> */}
        <a href="./shop">
          <img src="./favicon.ico" className="App-logo" alt="logo" />
        </a>
        <p>
          Shop your unique wisdom shirt here!
        </p>
        <a
          className="App-link"
          href="./shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Shop
        </a>
      </header>
    </div>
  )
}

export default LandingPage;