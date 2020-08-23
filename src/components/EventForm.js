import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    console.log({ title, body });
    dispatch({ type: "CREATE_EVENT", title, body });
    setTitle("");
    setBody("");
    //action = {  type:'CREATE_EVENT',  title:'aaaa',  body:'bbb' }
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを本当に削除しても良いですか");
    if (result) {
      dispatch({ type: "DELETE_ALL_EVENTS" });
    }
  };

  const unCreatable = title === "" || body === "";
  const unDeletable = state.length === 0;
  return (
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

      <Button variant="primary" onClick={addEvent} disabled={unCreatable}>
        イベント作成
      </Button>
      <Button variant="danger" onClick={deleteAllEvents} disabled={unDeletable}>
        全イベント削除
      </Button>
    </Form>
  );
};

export default EventForm;
