import React, { useState } from "react";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>States & Props</h1>

      <Greeting name="Yash" />
      <Greeting name="Atharva" />

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
