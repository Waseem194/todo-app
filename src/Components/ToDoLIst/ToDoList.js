import React from "react";
import ToDo from "../ToDo/ToDo";

import {
  Row,
  Col,
  Button,
  ListGroup,
  Container,
  Spinner,
} from "react-bootstrap";

const ToDoList = ({
  doneTodo,
  handleToggle,
  Completed,
  unComplete,
  allList,
  loadData,
  loading,
}) => {
  // useEffect(() => {
  //   console.log("doneTodo prop has changed");
  // }, [doneTodo]);
  return (
    <Container fluid="md">
      <Button
        style={{ margin: "20px" }}
        onClick={Completed}
        variant="success"
        aria-label="button"
      >
        Show Completed
      </Button>
      <Button style={{ margin: "20px" }} onClick={unComplete} variant="warning">
        Show Incomplete
      </Button>
      <Button style={{ margin: "20px" }} onClick={allList} variant="primary">
        Show All
      </Button>
      <Button style={{ margin: "20px" }} onClick={loadData} variant="dark">
        {loading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}{" "}
        Load Data
      </Button>
      <ListGroup>
        {doneTodo.map((todo, index) => {
          return (
            <Row key={index}>
              <Col>
                <ListGroup.Item>
                  <ToDo
                    toDo={todo}
                    handleToggle={handleToggle}
                  />
                </ListGroup.Item>
              </Col>
            </Row>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default ToDoList;
