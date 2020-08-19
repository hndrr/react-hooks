import React from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container fluid>
      <h4>イベント作成フォーム</h4>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="formEventTitle">タイトル</Form.Label>
          <Form.Control id="formEventTitle" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="formEventBody">ボディ</Form.Label>
          <Form.Control as="textarea" id="formEventBody" />
        </Form.Group>

        <Button variant="primary" type="submit">
          イベント作成
        </Button>
        <Button variant="danger" type="submit">
          イベント削除
        </Button>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
