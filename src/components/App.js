import React, { useReducer } from "react";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import { Container } from "react-bootstrap";

const App = () => {
  const intialState = {
    events: [],
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Container fluid>
        <h4>イベント作成フォーム</h4>
        <EventForm />

        <h4>イベント一覧</h4>
        <Events />
      </Container>
    </AppContext.Provider>
  );
};

export default App;
