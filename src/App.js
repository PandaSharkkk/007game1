import React from 'react';
import PhotoComponent from './imgCom.js';

const App = () => {
  return (
    <div className="container">
      <h1 id="level-title">007HandGame</h1>
      <div className="row">
        <PhotoComponent/>
        <PhotoComponent/>
      </div>
    </div>
  );
};

export default App;

/*
press any key to start the game.

user has 3 seconds with a countdown to choose on of the options. up down shoot or crossed. 

the game chooses a random action. whoever wins gets one point 

who ever gets to 5 points first wins and game is over

press any key to restart

*/