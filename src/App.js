import React, { useState, useCallback } from "react";
import Header from "./Components/Header/Header";
import ToDoList from "./Components/ToDoLIst/ToDoList";
import data from "./data.json";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [doneTodo, setDoneTodo] = useState();
  // if true you will show only completed
  // if false you will show only uncompleted
  // if undefined you will show all todolist

  const handleToggle = useCallback((id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : task;
    });
    setToDoList(mapped);
  }, [toDoList]);

  // const handleCompleted = useCallback(() => {
  //   let filtered = toDoList.filter((task) => {
  //     return task.complete;
  //   });
  //   setToDoList(filtered);
  // }, [toDoList]);

  // const handleUncompleted = useCallback(() => {
  //   let filtered = toDoList.filter((task) => {
  //     return !task.complete;
  //   });
  //   setToDoList(filtered);
  // }, [toDoList]);

  const addTask = useCallback((userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  }, [toDoList]);

  const filteredList = toDoList.filter();

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={filteredList}
        handleToggle={handleToggle}
        handleCompleted={handleCompleted}
        handleUncompleted={handleUncompleted}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
