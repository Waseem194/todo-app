import React from "react";

const ToDo = ({ toDo, handleToggle }) => {
  return (
    <div
      onClick={() => handleToggle(toDo.id)}
      className={toDo.complete ? "todo strike" : "todo"}
    >
      {toDo.task}
    </div>
  );
};

export default ToDo;
