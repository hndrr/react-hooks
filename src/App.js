import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default App;
