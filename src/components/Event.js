import React from "react";
import { Button } from "react-bootstrap";
import { DELETE_EVENT } from "../actions";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `ID:${id}のイベントを本当に削除しても良いですか`
    );

    if (result) dispatch({ type: DELETE_EVENT, id });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <Button variant="danger" onClick={handleClickDeleteButton}>
          削除
        </Button>
      </td>
    </tr>
  );
};

export default Event;
