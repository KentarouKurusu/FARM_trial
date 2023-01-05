import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Read all Todos
  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((res) => {
      setTodoList(res.data);
    });
  }, []);

  // Post a todo
  const addTodoHandler = () => {
    axios
      .post("http://localhost:8000/api/todo", {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
  };

  return (
    <div
      className="App list-group-item justify-content-center align-items-center mx-auto"
      style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
    >
      <h1
        className="card text-white bg-primary mb-1"
        stylename="max-width: 20rem;"
      >
        Task Manager
      </h1>
      <h6 className="card text-white bg-primary mb3">
        FASTAPI - React - MongoDB
      </h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
        <span className="card-text">
          <input
            className="mb-2 form-control titleIn"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            className="mb-2 form-control desIn"
            placeholder="Description"
            onChange={(event) => setDesc(event.target.value)}
          />
          <button
            className="btn btn-outline-primary mx-2 mb-3"
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
            }}
            onClick={addTodoHandler}
          >
            Add Task
          </button>
        </span>

        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
        <div>
          {/* Todo items - external component */}
          <TodoList todoList={todoList} />
        </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0">
        Copyright 2021, All rights reserved &copy;
      </h6>
    </div>
  );
}

export default App;
