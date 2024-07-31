import React from 'react'
import {level } from "./App"
import {botPoints } from "./App";
import {userPoints } from "./App";

const StartedGame = () => {
  return (
	<h1 className="level-title" > Bot: { botPoints } vs User: {userPoints}</h1>
  )
}

export default StartedGame