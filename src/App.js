import React, { useEffect, useState } from "react";

const App = (props) => {
  //初期値を渡す
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("like componentDidMount or componentDidUpdate");
  });

  //第２引数に空の配列を渡す
  useEffect(() => {
    console.log("like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("this callback is for name only.");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は{state.price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

//初期値
App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
