//import React from 'react';
import PhotoComponent from './imgCom.js';
import React, { useEffect, useState } from 'react'; 
import NotStartedGame from './notStartedGame.js';
import StartedGame from './startedGame.js';

var gameStarted = false;
export var botPoints = 0;
export var userPoints = 0;
export var level = 0;


const App = () => {
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    console.log(e.key);
    if(!gameStarted){
      gameStarted = true;
    }

  }
  return (
    <div className="container">
      <h1 className="level-title">007HandGame</h1>
      <br></br>
      {!gameStarted ?  
      <NotStartedGame></NotStartedGame> 
      : 
      <StartedGame></StartedGame>
        
      }
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