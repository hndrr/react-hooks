import React, { useReducer } from "react";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";
import { Container } from "react-bootstrap";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Container fluid>
      <h4>イベント作成フォーム</h4>
      <EventForm state={state} dispatch={dispatch} />

      <h4>イベント一覧</h4>
      <Events state={state} dispatch={dispatch} />
    </Container>
  );
};

export default App;
