import React, { useReducer, useState } from "react";
import reducer from "../reducers";
import Event from "./Event";
import { Container, Form, Table, Button } from "react-bootstrap";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    console.log({ title, body });
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
    //action = {
    //  type:'CREATE_EVENT',
    //  title:'aaaa',
    //  body:'bbb'
    //}
  };

  return (
    <Container fluid>
      <h4>イベント作成フォーム</h4>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="formEventTitle">タイトル</Form.Label>
          <Form.Control
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="formEventBody">ボディ</Form.Label>
          <Form.Control
            as="textarea"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" onClick={addEvent}>
          イベント作成
        </Button>
        <Button variant="danger">イベント削除</Button>
      </Form>

      <h4>イベント一覧</h4>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            //Eventコンポーネント内にpropsでeventとdispatch関数を渡す
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
