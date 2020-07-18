import React from 'react';
import logo from './assets/techstars-logo-white.svg';
import attendees from './assets/happy-attendees.jpg';
import './App.scss';
import Signup from './Signup.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Techstars" />
      </header>
      <main>
        <div className="App-wrapper">
          <h1 className="App-heading">Seattle Startup Week</h1>
          <p>August 3-8 2020 - Free</p>

          <div className="App-content row">
            <div className="col-12 col-md-6">
              <Signup />
            </div>
            <div className="col-12 col-md-6">
              <h3>Join Five Days of Fun</h3>
              <p>We're thrilled that you're interested in Startup Week. Startup Week is a free, five-day celebration of our community that builds momentum and opportunity around entrepreneurship. We're led by local entrepreneurs and hosted in amazing spaces all over town. And we want you involved! Take a second to sign up for our list to keep up with all the updates we'll have for you over the next few months.</p>
              <img src={attendees} alt="Happy attendees" />
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
