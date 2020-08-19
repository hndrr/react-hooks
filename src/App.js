import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const inCrement = () => setCount(count + 1);
  const deCrement = () => setCount(count - 1);

  return (
    <div className="App">
      {count}
      <button onClick={inCrement}>+1</button>
      <button onClick={deCrement}>-1</button>
    </div>
  );
};

export default App;
