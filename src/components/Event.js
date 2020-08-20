import React from "react";
import { Button } from "react-bootstrap";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", id });
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
