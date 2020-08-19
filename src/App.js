import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const inCrement = () => setCount(count + 1);
  const deCrement = () => setCount(count - 1);
  //setCount() に関数を渡せる引数は任意
  const inCrement2 = () => setCount((prevCount) => prevCount + 2);
  const deCrement2 = () => setCount((prevCount) => prevCount - 2);

  const double = () => setCount((prevCount) => prevCount * 2);
  const divide = () => setCount((prevCount) => prevCount / 2);
  const divideThree = () =>
    setCount((prevCount) => {
      if (prevCount % 3 === 0) {
        return prevCount / 3;
      } else {
        return prevCount;
      }
    });

  //Reset時は初期値を渡す
  const reSet = () => setCount(0);

  return (
    <div className="App">
      {count}
      <div>
        <button onClick={inCrement}>+1</button>
        <button onClick={deCrement}>-1</button>
      </div>
      <div>
        <button onClick={inCrement2}>+2</button>
        <button onClick={deCrement2}>-2</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
        <button onClick={divide}>/2</button>
        <button onClick={divideThree}>3の倍数時に3で割る</button>
      </div>
      <div>
        <button onClick={reSet}>reset</button>
      </div>
    </div>
  );
};

export default App;
