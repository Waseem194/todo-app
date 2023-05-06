import React from "react";
import ToDo from "../ToDo/ToDo";

const ToDoList = ({
  toDoList,
  handleToggle,
  handleCompleted,
  handleUncompleted,
}) => {
  return (
    <div>
      {toDoList.map((todo, index) => {
        return (
          <ToDo
            key={index}
            toDo={todo}
            handleToggle={handleToggle}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleCompleted}>
        Show Completed
      </button>
      <button style={{ margin: "20px" }} onClick={handleUncompleted}>
        Show Uncompleted
      </button>

      <button style={{ margin: "20px" }} onClick={handleUncompleted}>
        Show All
      </button>
    </div>
  );
};

export default ToDoList;
