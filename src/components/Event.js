import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { DELETE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
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
