import React from 'react';
import Commands from './Commands';

function Display({ session, resetTimer, play, playTimer, minutes, seconds }) {

  const timer = () => {
    playTimer();
  }

  return (
    <div className='display-container'>
      <h3 id="timer-label">{session ? "Session" : "Break"}</h3>
      <div className='time-container'>
        <h2  id="timer-left">
          <span className='minutes' id="minutes">{minutes < 10 ? '0' + minutes : minutes}</span>
          :<span className='seconds' id="seconds">{seconds < 10 ? '0' + seconds : seconds}</span>
        </h2>
      </div>
      <Commands
        play={play}
        timer={timer}
        resetTimer={resetTimer}
      />
    </div>
  )
}

export default Display