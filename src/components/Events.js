import React from "react";
import Event from "./Event";
import { Table } from "react-bootstrap";

const Events = ({ state, dispatch }) => {
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
          <Event key={index} event={event} dispatch={dispatch} />
        ))}
      </tbody>
    </Table>
  );
};

export default Events;
