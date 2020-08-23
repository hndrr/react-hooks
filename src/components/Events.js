import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";
import { Table } from "react-bootstrap";

const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <>
      <span>{value}</span>
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
    </>
  );
};

export default Events;
