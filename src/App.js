import React, { useState, useCallback } from "react";
import Header from "./Components/Header/Header";
import ToDoList from "./Components/ToDoList/ToDoList";
import data from "./data.json";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [doneTodo, setDoneTodo] = useState();
  // if true you will show only completed
  // if false you will show only uncompleted
  // if undefined you will show all todolist

  const handleToggle = useCallback(
    (id) => {
      let mapped = toDoList.map((task, index) => {
        // key={index}
        return task.id === Number(id)
          ? { ...task, complete: !task.complete }
          : task;
      });
      setToDoList(mapped);
    },
    [toDoList]
  );

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
  const Completed = useCallback(() => {
    setDoneTodo(true);
  }, []);

  const unComplete = useCallback(() => {
    setDoneTodo(false);
  }, []);

  const allList = useCallback(() => {
    setDoneTodo(undefined);
  }, []);

  const addTask = useCallback(
    (userInput) => {
      let copy = [...toDoList];
      copy = [
        ...copy,
        { id: toDoList.length + 1, task: userInput, complete: false },
      ];
      setToDoList(copy);
    },
    [toDoList]
  );

  const filterList = toDoList.filter((item) => {
    if (doneTodo === undefined) {
      return true;
    }

    if (doneTodo === item.complete) {
      return true;
    }
  });

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        doneTodo={filterList}
        handleToggle={handleToggle}
        Completed={Completed}
        unComplete={unComplete}
        allList={allList}
 
        // handleCompleted={handleCompleted}
        // handleUncompleted={handleUncompleted}
      />
     
    </div>
  );
}

export default App;
