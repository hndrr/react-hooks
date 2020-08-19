import React, { useState } from "react";

const App = (props) => {
  //初期値を渡す
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  //初期値でリセットできる
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は{price}円です。
      </p>
      <button onClick={() => setPrice((prevPrice) => prevPrice + 1)}>+1</button>
      <button onClick={() => setPrice((prevPrice) => prevPrice - 1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

//初期値
App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
