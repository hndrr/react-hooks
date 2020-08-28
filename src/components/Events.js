import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";
import { Table } from "react-bootstrap";

const Events = () => {
  const { state } = useContext(AppContext);

  return (
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
          <Event key={index} event={event} />
        ))}
      </tbody>
    </Table>
  );
};

export default Events;
