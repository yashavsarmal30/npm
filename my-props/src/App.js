import React, { useState } from "react";

// Child Component
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>; // Using props
}

function App() {
  const [count, setCount] = useState(0); // State

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>State & Props Demo</h1>

      {/* Props demonstration */}
      <Greeting name="Yash" />

      {/* State demonstration */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
