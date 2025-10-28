import React, { useState, useEffect, useRef } from "react";
export default function TimerApp() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    console.log("Component Mounted ");
    return () => {
      console.log("Component Unmounted ");
      clearInterval(intervalRef.current);
    };
  }, []);
  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer using useEffect & useRef</h1>
      <h2>Time: {count} seconds</h2>
      <button onClick={startTimer} style={{ margin: "5px" }}>
        Start
      </button>
      <button onClick={stopTimer} style={{ margin: "5px" }}>
        Stop
      </button>
      <button onClick={resetTimer} style={{ margin: "5px" }}>
        {" "}
        Reset
      </button>
    </div>
  );
}
