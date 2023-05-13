import React from "react";
import { Placeholder } from "react-bootstrap";

const ToDo = ({ toDo, handleToggle }) => {
  return (
    <div
      onClick={() => handleToggle(toDo.id)}
      className={toDo.complete ? "todo strike" : "todo"}
    >
      {toDo.newlyAdded && (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12}  bg="primary" />
        </Placeholder>
      )}
      {toDo.task}
    </div>
  );
};

export default ToDo;
