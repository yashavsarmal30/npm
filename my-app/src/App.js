import React, { useState } from "react";

// Child Component (uses Props)
function Child(props) {
  return <h3>Hello, {props.name}!</h3>;
}

// Parent Component (uses State)
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React State and Props Example</h2>

      {/* State Example */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* Props Example */}
      <Child name="Bob" />
      <Child name="Alice" />
    </div>
  );
}

export default App;
