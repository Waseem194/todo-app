import React, { useState, useCallback, useEffect } from "react";
import Header from "./Components/Header/Header";
import TodoList from "./Components/ToDoList/ToDoList";
import data from "./data.json";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [doneTodo, setDoneTodo] = useState();
  // if true you will show only completed
  // if false you will show only uncompleted
  // if undefined you will show all todolist

  // mount, update, unmount
  useEffect(() => {
    console.log("Only runs on Mount");
    return () => {};
  }, []);

  useEffect(() => {
    if (doneTodo) {
      setDoneTodo(false);
    }
    console.log("this runs when doneTodo state changes", doneTodo, toDoList);
  }, [doneTodo, toDoList]);


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

  const addAtFirst = useCallback((item) => {
    const newTask = {
      task: item,
      complete: false,
    };
    const newList = [newTask, ...toDoList];
    setToDoList(newList); // reference comparison ki waja se state update hoti hai
  }, [toDoList]);

  console.log(toDoList);
  const filterList = toDoList.filter((item) => {
    if (doneTodo === undefined) {
      return true;
    }

    if (doneTodo === item.complete) {
      return true;
    }
  });

  // API CODE
  const loadData = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    try {
      const response = await fetch(url);
      const data = await response.json();
      // JavaScript Object Notation
      // [{ a: "1", b: "2"}]
      // addTask(data.setup);
      addAtFirst(data.setup);
    } catch(error) {
      console.log(error);
    }
  
    // const apiData = async (url) => {
    //   try {
    //     const res = fetch(url);
    //     url.unshift(res);
    //     let data = await res.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  };
  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <TodoList
        doneTodo={filterList}
        loadData={loadData}
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
