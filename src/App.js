import { useEffect, useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import Display from './components/Display';
import crazyBitch from './audio/crazy-bitch.wav'

function App() {

  const [session, setSession] = useState(true);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [minutes, setMinutes] = useState(sessionTime);
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {

    const countDown = () => {
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      if (seconds === 0) {
        newSeconds = 59;
        newMinutes = minutes - 1;
      }
      setMinutes(newMinutes);
      setSeconds(newSeconds);
      if (minutes === 0 && seconds === 0) {
        changeType();
      }
    }

    const changeType = () => {
      session ? setMinutes(breakTime - 1) : setMinutes(sessionTime - 1);
      session ? setSession(false) : setSession(true);
      // const audio = document.getElementById("beep");
      const audio = new Audio(crazyBitch);
      audio.setAttribute("id", "beep");
      audio.play();
    }

    if (play) {
      const timer = setInterval(() => countDown(),
        1000);
      return () => {
        clearInterval(timer);
      }
    }
  }, [play, seconds, minutes, breakTime, session, sessionTime]);

  const playTimer = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }



  const resetTimer = () => {
    setSessionTime(25);
    setBreakTime(5);
    setSeconds(0);
    setSession(true)
    session ? setMinutes(25) : setMinutes(5);
  }

  const changeTime = (name, e) => {
    if (e.target.className.includes("fa-arrow-up")) {
      if (name === "Break") {
        breakTime < 60
          ? setBreakTime(breakTime => breakTime + 1)
          : setBreakTime(breakTime);
        if (!session) {
          breakTime < 60
            ? setMinutes(breakTime => breakTime + 1)
            : setMinutes(breakTime => breakTime)

        }
      } else {
        sessionTime < 60
          ? setSessionTime(sessionTime => sessionTime + 1)
          : setSessionTime(sessionTime => sessionTime)
        if (session) {
          sessionTime < 60
            ? setMinutes(sessionTime => sessionTime + 1)
            : setMinutes(sessionTime => sessionTime);
        }
      }
    } else {
      if (name === "Break") {
        breakTime > 0
          ? setBreakTime(breakTime => breakTime - 1)
          : setBreakTime(breakTime);
        if (!session) {
          breakTime > 0
            ? setMinutes(breakTime => breakTime - 1)
            : setMinutes(breakTime => breakTime);
        }
      } else {
        sessionTime > 0
          ? setSessionTime(sessionTime => sessionTime - 1)
          : setSessionTime(sessionTime => sessionTime)
        if (session) {
          sessionTime > 0
            ? setMinutes(sessionTime => sessionTime - 1)
            : setMinutes(sessionTime => sessionTime);
        }
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='settings'>
          <Settings
            name={"Break"}
            time={breakTime}
            changeTime={changeTime}
            play={play}
          />
          <Settings
            name={"Session"}
            time={sessionTime}
            changeTime={changeTime}
            play={play}
          />
        </div>
        <Display
          session={session}
          sessionTime={sessionTime}
          breakTime={breakTime}
          resetTimer={resetTimer}
          play={play}
          playTimer={playTimer}
          minutes={minutes}
          seconds={seconds}
        />
      </header>
    </div>
  );
}

export default App;
